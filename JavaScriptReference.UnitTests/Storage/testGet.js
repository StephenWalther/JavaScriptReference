/// <reference path="..\JavaScriptTestHelpers\JavaScriptUnitTestFramework.js"/>

function testGet() {

    // Arrange
    var provider = {
        store: {},

        setItem: function (name, value) {
            this.store[name] = value;
        },

        getItem: function (name) {
            return this.store[name];
        }
    };
    var storage = new Storage(provider);

    // Act
    storage.set("product", { name: "Lettuce", price: 12.33 });
    var result = storage.get("product");

    // Assert
    assert.areEqual(12.33, result.price);
}

