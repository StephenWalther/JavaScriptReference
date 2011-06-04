/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>


function testMergeUpdate() {
    // Arrange
    var oldEntries = [
        { Id: 27, Name: "Apples", LastUpdated: 1, IsDeleted: false },
        { Id: 7, Name: "bacon", LastUpdated: 92, IsDeleted: false },
        { Id: 18, Name: "clams", LastUpdated: 78, IsDeleted: false },
        { Id: 121, Name: "oranges", LastUpdated: 12, IsDeleted: false }
    ];

    var newEntries = [
        { Id: 7, Name: "Bacon 2", LastUpdated: 100, IsDeleted: false },
        { Id: 27, Name: "Apples 2", LastUpdated: 100, IsDeleted: false }
    ];


    // Act
    var results = EntriesHelper.merge(oldEntries, newEntries);

    // Assert
    assert.areEqual("Apples 2", results[0].Name); 
    assert.areEqual("Bacon 2", results[1].Name); 
}


