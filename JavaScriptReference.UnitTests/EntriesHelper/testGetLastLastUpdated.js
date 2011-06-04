/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>


function testGetLastLastUpdated() {
    // Arrange
    var entries = [
        { Id: "a", LastUpdated: 3 },
        { Id: "b", LastUpdated: 1 },
        { Id: "c", LastUpdated: 36 },
        { Id: "d", LastUpdated: 19 }
    ];


    // Act
    var result = EntriesHelper.getLastLastUpdated(entries);

    // Assert
    assert.areEqual(36, result);
}
