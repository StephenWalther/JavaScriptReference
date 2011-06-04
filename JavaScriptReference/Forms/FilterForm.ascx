<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FilterForm.ascx.cs" Inherits="JavaScriptReference.UserControls.FilterForm" %>
<div id="filterContainer">
    <div>
        <input id="filter" />
    </div>

    <div id="syntaxOptions">
        <input name="syntax" id="syntaxAll" type="radio" checked="checked" value="all" /><label for="syntaxAll">All</label>
        <input name="syntax" id="syntaxObjects" type="radio" value="object" /><label for="syntaxObjects">Objects</label>
        <input name="syntax" id="syntaxFunctions" type="radio" value="function" /><label for="syntaxFunctions">Functions</label>
        <input name="syntax" id="syntaxProperties" type="radio" value="property" /><label for="syntaxProperties">Properties</label>        
        <input name="syntax" id="syntaxStatements" type="radio" value="statement" /><label for="syntaxStatements">Statements</label>
        <input name="syntax" id="syntaxOperators" type="radio" value="operator" /><label for="syntaxOperators">Operators</label>
        <input name="syntax" id="syntaxComments" type="radio" value="comment" /><label for="syntaxComments">Comments</label>
        <input name="syntax" id="syntaxDirectives" type="radio" value="directive" /><label for="syntaxDirectives">Directives</label>
    </div>

</div>
<div id="results"></div>
