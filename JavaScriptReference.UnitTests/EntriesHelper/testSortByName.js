/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>

function testSortByName() {
    // Arrange
    var entries = [
        { Name: "bacon" },
        { Name: "Cabbage" },
        { Name: "apple" },
        { Name: "clams" }
    ];

    // Act
    EntriesHelper.sortByName(entries);

    // Assert
    assert.areEqual("apple", entries[0].Name);
    assert.areEqual("bacon", entries[1].Name);
    assert.areEqual("Cabbage", entries[2].Name);
    assert.areEqual("clams", entries[3].Name);
}