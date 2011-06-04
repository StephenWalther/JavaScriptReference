
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisp */) {
        "use strict";

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }

        return res;
    };
}

;function Storage(provider) {

    provider = provider || getBrowserProvider();

    this.get = function (name) {
        if (provider) {
            return JSON.parse(provider.getItem(name));
        }
    };

    this.set = function (name, value) {
        if (provider) {
            provider.setItem(name, JSON.stringify(value));
        }
    };

    this.clear = function () {
        if (provider) {
            provider.clear();
        }
    };


    function getBrowserProvider() {
        if (window.localStorage) {
            return window.localStorage;
        }
    }

}




;function ServerData(resourceUrl) {

    this._resourceUrl = resourceUrl;

    this.getNewEntries = function (lastUpdated, callback) {
        var query = this._resourceUrl;
        if (entriesLastUpdated) {
            query += "?$filter=(LastUpdated%20gt%20" + lastUpdated + "L)";
        }

        this.queryService(query, function (newEntries) {
            if (callback) {
                callback(newEntries);
            }
        })
    };


    this.queryService = function (query, callback) {
        $.ajax({
            dataType: "json",
            url: query,
            success: function (result) {
                if (callback) {
                    callback(result["d"]);
                }
            }
        });
    };


    this.saveEntry = function (entry, callback) {
        if (entry.Id) {
            this.editEntry(entry, callback);
        } else {
            this.addEntry(entry, callback);
        }
    }; 

    this.addEntry = function (entry, callback) {

        // JSONify the data
        var data = JSON.stringify(entry);

        // Post it
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: this._resourceUrl,
            data: data,
            dataType: "json",
            success: function (result) {
                callback();
            }
        });
    };


    this.editEntry = function (entry, callback) {

        // Point to the right resource
        var editUrl = this._resourceUrl + "(" + entry.Id + ")";

        // JSONify the data
        var data = JSON.stringify(entry);

        // Post it
        $.ajax({
            type: "PUT",
            contentType: "application/json; charset=utf-8",
            url: editUrl,
            data: data,
            dataType: "json",
            success: function (result) {
                callback();
            }
        });
    };



    this.deleteEntry = function (id, callback) {

        // Point to the right resource
        var deleteUrl = this._resourceUrl + "(" + id + ")";

        // Post it
        $.ajax({
            type: "DELETE",
            contentType: "application/json; charset=utf-8",
            url: deleteUrl,
            dataType: "json",
            success: function (result) {
                if (callback) {
                    callback();
                }
            }
        });
    };



};// Contains static helper methods for entries

var EntriesHelper = {


    merge: function (oldEntries, newEntries) {
        // concat (this performs the add)
        oldEntries = oldEntries || [];
        var mergedEntries = oldEntries.concat(newEntries);

        // sort
        this.sortByIdThenLastUpdated(mergedEntries);

        // prune duplicates (this performs the update)
        mergedEntries = this.pruneDuplicates(mergedEntries);

        // delete
        mergedEntries = this.removeIsDeleted(mergedEntries);

        // Sort
        this.sortByName(mergedEntries);

        return mergedEntries;
    },

    sortByIdThenLastUpdated: function (entries) {
        entries.sort(function (a, b) {
            if (a.Id > b.Id) { return 1 };
            if (a.Id < b.Id) { return -1 };
            if (a.LastUpdated > b.LastUpdated) { return -1 };
            if (a.LastUpdated < b.LastUpdated) { return 1 };
            return 0;
        });
    },

    pruneDuplicates: function (entries) {
        var currentEntry, prevEntry = { Id: -1 };
        var results = [];
        for (var i = 0; i < entries.length; i++) {
            currentEntry = entries[i];

            if (currentEntry.Id !== prevEntry.Id) {
                results.push(currentEntry);
            }
            prevEntry = currentEntry;
        }
        return results;
    },

    removeIsDeleted: function (entries) {
        return entries.filter(function (element) {
            return (!element.IsDeleted);
        });
    },


    sortByName: function (entries) {
        entries.sort(function (a, b) {
            var nameA = a.Name.toLowerCase();
            var nameB = b.Name.toLowerCase();

            if (nameA > nameB) return 1;
            if (nameA < nameB) return -1;
            return 0;
        });
    },

    getLastLastUpdated: function (entries) {
        var lastUpdated = 0;
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].LastUpdated > lastUpdated) {
                lastUpdated = entries[i].LastUpdated;
            }
        }
        return lastUpdated;
    },

    getEntry: function (id) {
        // ie does not support indexOf
        var entry;
        for (var i = 0; i < entries.length; i++) {
            entry = entries[i];
            if (entry.Id == id) { // Do weak equality to work with string "1" instead of 1
                return entry;
            }
        }
    }


};;// Authentication

/// <reference path="~/default.aspx"/>


var Authentication = {

    login: function (userName, password, callback) {
        // Convert the form into an object
        var credentials = {
            userName: userName,
            password: password
        };

        // JSONify the data
        var data = JSON.stringify(credentials);
    
        // Call the service
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Services/LoginService.svc/authenticate",
            data: data,
            dataType: "json",
            success: function (result) {
                callback(result["d"]);
            }
        });
    }
};

;/// <reference path="..\Default.aspx"/>

//////////////////////
//
//  Globals
//
/////////////////////

var adminMode = false; 

var filter = "";
var syntax = "all";

var storage = new Storage();
var serverData = new ServerData("Services/EntryService.svc/Entries");

var entries;
var entriesLastUpdated;

///////////////////
//
// Setup status divs
//
///////////////////

// Show ajax calls
$("#ajaxing").ajaxStart(function () {
    $(this).show();
});

$("#ajaxing").ajaxStop(function () {
    $(this).hide();
});


// Show offline
$(window).bind("offline", function () {
    $("#offline").show();
});

$(window).bind("online", function () {
    $("#offline").hide();
});


///////////////////
//
// Load data
//
///////////////////

loadData();


function resetData() {
    storage.clear();
    loadData();
}

function loadData(callback) {
    // Get entries from local storage
    entries = storage.get("entries") || [];
    entriesLastUpdated = storage.get("entriesLastUpdated") || 0;

    
    // Get new entries from server
    serverData.getNewEntries(entriesLastUpdated, function (newEntries) {
        if (newEntries.length) {
            entries = EntriesHelper.merge(entries, newEntries);
            entriesLastUpdated = EntriesHelper.getLastLastUpdated(entries);
            storage.set("entries", entries);
            storage.set("entriesLastUpdated", entriesLastUpdated);
            if (callback) {
                callback();
            }
        }
    });

}

//////////////////////////////////
//
// Set up standard UI elements
//
///////////////////////////////////


// Create syntax options buttons
$("#syntaxOptions").buttonset().change(displayResults);

$("#loginForm").dialog({
    autoOpen: false,
    height: 240,
    width: 300,
    modal: true,
    buttons: {
        "Log In": {
            id: "btnDoLogin",
            text: "Log In",
            click: function () {

                Authentication.login($("#userName").val(), $("#password").val(), function (result) {
                    adminMode = result;
                    if (adminMode) {
                        $(".admin").show();
                        $("#btnLogin").hide();
                        $("#loginForm").dialog("close");
                    } else {
                        $("#badLoginMessage").show();
                    }
                });
            }

        }
    }
});


$("#btnLogin").button().click(function () {
    $("#loginForm").dialog("open");

});



// Create edit entry form
$("#editEntryForm").dialog({
    autoOpen: false,
    height: 590,
    width: 550,
    modal: true,
    buttons: {
        "Save": function () {

            // Convert the form into an object
            var browsers = [];
            $("input[name=entryBrowser]:checked").each(function () {
                browsers.push($(this).val());
            });

            var entry = {
                Id: $("#entryId").val(),
                Name: $("#entryName").val(),
                OwnerId: $("#entryOwnerId").val(),
                Syntax: $("input[name=entrySyntax]:checked").val(),
                Browsers: browsers.join(","),
                ShortDescription: $("#entryShortDescription").val(),
                FullDescription: $("#entryFullDescription").val()
            };

            // Set nulls
            if (!entry.OwnerId) {
                entry.OwnerId = null;
            }

            // Add or edit the entry
            serverData.saveEntry(entry, function () {
                loadData(function () {
                    displayResults();
                });
            });

            // Call close
            $(this).dialog("close");
        }

    }
});


$("#btnAddEntry").button().click(function (e) {
    var entry = {
        Syntax:"function",
        Browsers: ""
    };
    updateEditEntryTemplate(entry);
    $("#editEntryForm").dialog("open");
});




// Create entry details form
$("#entryDetailsForm").dialog({
    autoOpen: false,
    height: 590,
    width: 550,
    modal: true
});


 //Create buttons for showing details
$(".btnEntryDetails").live("click", function (e) {
    // Don't post back
    e.preventDefault();

    // Get entry
    var id = $(e.target).attr("data-id");
    var entry = EntriesHelper.getEntry(id);

    // Update details template
    $("#entryDetailsForm").empty();
    $("#entryDetailsTemplate").tmpl(entry).appendTo("#entryDetailsForm");

    // Show the form
    $("#entryDetailsForm").dialog("option", "title", entry.Name);
    $("#entryDetailsForm").dialog("open");
});


// Create filter text box
$("#filter").keyup(displayResults);


// Create delete button
$("#deleteEntry").live("click", function (e) {
    if (confirm("Are you sure!?")) {
        var id = $(e.target).attr("data-id");
        serverData.deleteEntry(id, function () {
            loadData(function () {
                displayResults();
            });
            $("#entryDetailsForm").dialog("close");
        });
    }
});



// Create edit button
$("#editEntry").live("click", function (e) {
    var id = $(e.target).attr("data-id");

    $("#entryDetailsForm").dialog("close");
    $("#editEntryForm").dialog("open");

    var entry = EntriesHelper.getEntry(id);

    updateEditEntryTemplate(entry);
});


function updateEditEntryTemplate(entry) {
    $("#editEntryForm").empty();
    $("#editEntryTemplate").tmpl(entry).appendTo("#editEntryForm");
}




///////////////////////////////
//
//  Core functions
//
///////////////////////////////

function displayResults() {
    filter = $("#filter").val().toLowerCase();
    syntax = $("input[name=syntax]:checked").val();

    // Clear current results
    $("#results").empty();


    // Don't display results when no filter
    if (filter === "" && syntax === "all") {
        return;
    }

    var filtered = entries.filter(filterFunction);
    $("#entryTemplate").tmpl(filtered).appendTo("#results");
}

function filterFunction(element, index, array) {
    return ((element.Name.toLowerCase().substr(0, filter.length) === filter) 
        && ((syntax === "all") || (element.Syntax === syntax)));
}






///////////////////////////
//
//  Template functions
//
////////////////////////////

function split(items) {
    return items.split(",");
}


function checked(a, b) {
    if (a === b) {
        return " checked=\"checked\" ";
    }
}


function checkedContains(target, value) {
    var targets = target.split(",");
    for (var i = 0; i < targets.length; i++) {
        if (targets[i] === value) {
            return " checked=\"checked\" ";
        }
    }
}

function getObjectMethods(id) {
    return entries.filter(function (element) {
        if (element.OwnerId == id && element.Syntax === "function") {
            return true;
        }
    });
}


function getObjectProperties(id) {
    return entries.filter(function (element) {
        if (element.OwnerId == id && element.Syntax === "property") {
            return true;
        }
    });
}



function getObjectName(id) {
    for (var i = 0; i < entries.length; i++) {
        if (id == entries[i].Id) {
            return entries[i].Name;
        }
    }
}

function removeMethodArguments(method) {
    return method.replace(/\(.*\)/, "");
};