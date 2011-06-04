function ServerData(resourceUrl) {

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



}