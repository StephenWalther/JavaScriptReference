<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JavaScriptReference.Default" %>
<%@ Register Src="~/Forms/FilterForm.ascx" TagPrefix="user" TagName="FilterForm" %>
<%@ Register Src="~/Forms/LoginForm.ascx" TagPrefix="user" TagName="LoginForm" %>
<%@ Register Src="~/Templates/EntryTemplate.ascx" TagPrefix="user" TagName="EntryTemplate" %>
<%@ Register Src="~/Templates/EntryDetailsTemplate.ascx" TagPrefix="user" TagName="EntryDetailsTemplate" %>
<%@ Register Src="~/Templates/BrowsersTemplate.ascx" TagPrefix="user" TagName="BrowsersTemplate" %>
<%@ Register Src="~/Templates/EditEntryTemplate.ascx" TagPrefix="user" TagName="EditEntryTemplate" %>
<%@ Register Src="~/Templates/EntryDetailsCloudTemplate.ascx" TagPrefix="user" TagName="EntryDetailsCloudTemplate" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" manifest="Manifest.ashx">
<head>
    <title>Superexpert JavaScript Reference</title> 
    
    <link rel="stylesheet" type="text/css" href="Content/ui-lightness/jquery-ui-1.8.7.custom.css" />
    <link href="Content/default.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <!-- Status Divs -->
    <div id="ajaxing" class="status displayNone">Working</div>
    <div id="offline" class="status displayNone">Offline</div>

    <!-- Logo Div -->
    <div id="logoDiv">
        <img src="Content/logo.png" alt="Superexpert JavaScript Reference" />
        <a href="http://superexpert.com/resources/JavaScriptReference/">Learn how this HTML5 app was made</a>
    </div>


    <!-- Main Form -->
    <user:FilterForm runat="server" />

    <!-- Popup Forms -->
    <user:LoginForm runat="server" />
    <div id="editEntryForm" title="Edit Reference Entry" class="displayNone"></div>

    <!-- Popup Form Buttons -->
    <button id="btnLogin">Login</button>
    <button id="btnAddEntry" class="admin">Add Reference Entry</button>

    <!-- Entry Details Form -->
    <div id="entryDetailsForm" title="Details" class="displayNone"><h1>Details</h1></div>

    <!-- Templates -->
    <user:EntryTemplate runat="server" />
    <user:EntryDetailsTemplate runat="server" />
    <user:BrowsersTemplate runat="server" />
    <user:EditEntryTemplate runat="server" />
    <user:EntryDetailsCloudTemplate runat="server" />

    <!-- Library Scripts -->
    <script src="Scripts/jquery-1.4.4.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.7.custom.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery.tmpl.min.js" type="text/javascript"></script>    
    <script src="Scripts/json2.js" type="text/javascript"></script>

    <!-- App Scripts --> 
    <form runat="server">
    <asp:ScriptManager ID="sm1" AjaxFrameworkMode="Disabled" runat="server">
    <CompositeScript Path="App_Scripts/combine.js">
        <Scripts>
            <asp:ScriptReference Path="~/App_Scripts/compat.js" />
            <asp:ScriptReference Path="~/App_Scripts/storage.js" />   
            <asp:ScriptReference Path="~/App_Scripts/serverData.js" />
            <asp:ScriptReference Path="~/App_Scripts/entriesHelper.js" />
            <asp:ScriptReference Path="~/App_Scripts/authentication.js" />
            <asp:ScriptReference Path="~/App_Scripts/default.js" />
        </Scripts>
    </CompositeScript>
    </asp:ScriptManager>
    </form>
    

</body>
</html>
