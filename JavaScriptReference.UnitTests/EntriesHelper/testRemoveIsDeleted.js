/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>

function testRemoveIsDeleted() {
    // Arrange
    var entries = [
        { Id: "a", IsDeleted: true },
        { Id: "b", IsDeleted: false },
        { Id: "c", IsDeleted: true }
    ];

    // Act
    var results = EntriesHelper.removeIsDeleted(entries);

    // Assert
    assert.areEqual(1, results.length);
    assert.areEqual("b", results[0].Id);
}