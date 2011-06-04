/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>


function testPruneDuplicates() {
    // Arrange
    var entries = [
        { Id: "a", LastUpdated: 2 },
        { Id: "a", LastUpdated: 1 },
        { Id: "b", LastUpdated: 1 },
        { Id: "c", LastUpdated: 2 },
        { Id: "c", LastUpdated: 1 }
    ];

    // Act
    var results = EntriesHelper.pruneDuplicates(entries);

    // Assert correct number of entries
    assert.areEqual(3, results.length);

    // Assert newest entries preserved
    assert.areEqual("a", results[0].Id);
    assert.areEqual(2, results[0].LastUpdated);
}