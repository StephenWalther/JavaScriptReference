// Authentication

/// <reference path="~/default.aspx"/>


var Authentication = {

    login: function (userName, password, callback) {
        // Convert the form into an object
        var credentials = {
            userName: userName,
            password: password
        };

        // JSONify the data
        var data = JSON.stringify(credentials);
    
        // Call the service
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Services/LoginService.svc/authenticate",
            data: data,
            dataType: "json",
            success: function (result) {
                callback(result["d"]);
            }
        });
    }
};

