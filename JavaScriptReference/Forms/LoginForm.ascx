<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="LoginForm.ascx.cs" Inherits="JavaScriptReference.UserControls.LoginForm" %>
<div id="loginForm" title="Login" class="displayNone">
        
    <label>User Name:</label>
    <br />
    <input id="userName" class="ui-widget-content ui-corner-all" />

    <br /><br />
    <label>Password:</label>
    <br />
    <input id="password" type="password" class="ui-widget-content ui-corner-all" />
    <div id="badLoginMessage" class="error displayNone">Invalid user name or password</div>   
</div>
