/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>


/*
    The expectation is that the array will be sorted like:
    a2
    a1
    b1
    c2
    c1
*/


function testSortByIdThenLastUpdated() {
    // Arrange
    var entries = [
        { Id: "c", LastUpdated: 1 },
        { Id: "a", LastUpdated: 2 },
        { Id: "c", LastUpdated: 2 },
        { Id: "b", LastUpdated: 1 },
        { Id: "a", LastUpdated: 1 }
    ];

    // Act
    EntriesHelper.sortByIdThenLastUpdated(entries);

    // Assert
    // First entry should be a2
    assert.areEqual("a", entries[0].Id);
    assert.areEqual(2, entries[0].LastUpdated);

    // Last entry should be c1
    assert.areEqual("c", entries[entries.length - 1].Id);
    assert.areEqual(1, entries[entries.length - 1].LastUpdated);
}