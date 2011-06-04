/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>


function testMergeAdd() {
    // Arrange
    var oldEntries = [
        { Id: 27, Name: "Apples", LastUpdated: 1, IsDeleted: false },
        { Id: 7, Name: "bacon", LastUpdated: 92, IsDeleted: false },
        { Id: 18, Name: "clams", LastUpdated: 78, IsDeleted: false },
        { Id: 121, Name: "oranges", LastUpdated: 12, IsDeleted: false }
    ];

    var newEntries = [
        { Id: 128, Name: "New Thing 1", LastUpdated: 100, IsDeleted: false },
        { Id: 122, Name: "New Thing 2", LastUpdated: 100, IsDeleted: false }
    ];


    // Act
    var results = EntriesHelper.merge(oldEntries, newEntries);

    // Assert
    assert.areEqual(6, results.length); // Added 2
}

