/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>

function testFilter() {
    // Arrange
    var products = [
        { name: "apples", price: 12.34 },
        { name: "carrots", price: 2.88 },
        { name: "milk", price: 1.79 },
    ];
   
    // Act
    var result = products.filter(function (element) {
        return (element.price === 2.88);
    });

    // Assert
    assert.areEqual(1, result.length); // array of 1 element
    assert.areEqual("carrots", result[0].name); // matched carrots
}

