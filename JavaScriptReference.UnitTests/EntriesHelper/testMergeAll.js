/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>


function testMergeAll() {
    // Arrange
    var oldEntries = [
        { Id: 27, Name: "Apples", LastUpdated: 1, IsDeleted: false },
        { Id: 7, Name: "bacon", LastUpdated: 92, IsDeleted: false },
        { Id: 18, Name: "clams", LastUpdated: 78, IsDeleted: false },
        { Id: 121, Name: "oranges", LastUpdated: 12, IsDeleted: false }
    ];


    var newThing = { Id: 150, Name: "New thing", LastUpdated: 120, IsDeleted: false };
    var deletedThing = { Id: 18, Name: "clams", LastUpdated: 100, IsDeleted: true };

    var newEntries = [
        { Id: 7, Name: "Bacon 2", LastUpdated: 100, IsDeleted: false },
        deletedThing,
        newThing
    ];


    // Act
    var results = EntriesHelper.merge(oldEntries, newEntries);

    // Assert
    assert.areEqual(4, results.length); // Added 1 and removed 1
    arrayAssert.contains(results, newThing, "New Thing"); // Added New Thing
    arrayAssert.doesNotContain(results, deletedThing, "Deleted Thing"); // Deleted Thing
    assert.areEqual("Bacon 2", results[1].Name); // Updated Bacon to Bacon 2
}


