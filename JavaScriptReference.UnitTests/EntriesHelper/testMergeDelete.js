/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>


function testMergeDelete() {
    // Arrange
    var oldEntries = [
        { Id: 27, Name: "Apples", LastUpdated: 1, IsDeleted: false },
        { Id: 7, Name: "bacon", LastUpdated: 92, IsDeleted: false },      
        { Id: 18, Name: "clams", LastUpdated: 78, IsDeleted: false },
        { Id: 121, Name: "oranges", LastUpdated: 12, IsDeleted: false }
    ];

        var newEntries = [
        { Id: 18, LastUpdated: 100, IsDeleted: true },
        { Id: 27, LastUpdated: 100, IsDeleted: true }
    ];


    // Act
    var results = EntriesHelper.merge(oldEntries, newEntries);
    
    // Assert
    assert.areEqual(2, results.length); // Deleted 2
}


