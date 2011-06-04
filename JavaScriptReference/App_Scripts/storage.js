function Storage(provider) {

    provider = provider || getBrowserProvider();

    this.get = function (name) {
        if (provider) {
            return JSON.parse(provider.getItem(name));
        }
    };

    this.set = function (name, value) {
        if (provider) {
            provider.setItem(name, JSON.stringify(value));
        }
    };

    this.clear = function () {
        if (provider) {
            provider.clear();
        }
    };


    function getBrowserProvider() {
        if (window.localStorage) {
            return window.localStorage;
        }
    }

}




