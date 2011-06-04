// Contains static helper methods for entries

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


};