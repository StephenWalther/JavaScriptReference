<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EditEntryTemplate.ascx.cs" Inherits="JavaScriptReference.Templates.EditEntryTemplate" %>


<script id="editEntryTemplate" type="text/jquery-tmpl">
    {{if Id}}
        Id: ${Id}
        <input id="entryId" type="hidden" value="${Id}" />
        <br /><br />
    {{/if}}

    <label>Name:</label>
    <br />
    <input id="entryName" value="${Name}" class="ui-widget-content ui-corner-all" />

    <br /><br />
    <label>Owner Id (optional):</label>
    <br />
    <input id="entryOwnerId" value="${OwnerId}" class="ui-widget-content ui-corner-all" />

    <br /><br />
    <label>Syntax:</label>
    <br />
    <input name="entrySyntax" id="entryObject" type="radio" value="object" ${checked(Syntax, "object")}/><label for="entryObject">Object</label>
    <input name="entrySyntax" id="entryFunction" type="radio" value="function" ${checked(Syntax, "function")} /><label for="entryFunction">Function</label>
    <input name="entrySyntax" id="entryProperty" type="radio" value="property" ${checked(Syntax, "property")} /><label for="entryProperty">Property</label>
    <input name="entrySyntax" id="entryStatement" type="radio" value="statement" ${checked(Syntax, "statement")} /><label for="entryStatement">Statement</label>
    <input name="entrySyntax" id="entryOperator" type="radio" value="operator" ${checked(Syntax, "operator")} /><label for="entryOperator">Operator</label>
    <input name="entrySyntax" id="entryComment" type="radio" value="comment" ${checked(Syntax, "comment")} /><label for="entryComment">Comment</label>
    <input name="entrySyntax" id="entryDirective" type="radio" value="directive" ${checked(Syntax, "directive")} /><label for="entryDirective">Directive</label>


    <br /><br />
    <label>Browsers:</label>
    <br />
    <input name="entryBrowser" id="entryFF3_6" type="checkbox" value="ff3_6" ${checkedContains(Browsers, "ff3_6")} /><label for="entryFF3_6">Firefox 3.6</label>
    <input name="entryBrowser" id="entryIE8" type="checkbox" value="ie8" ${checkedContains(Browsers, "ie8")} /><label for="entryIE8">IE 8</label>
    <input name="entryBrowser" id="entryIE9" type="checkbox" value="ie9" ${checkedContains(Browsers, "ie9")} /><label for="entryIE9">IE 9</label>
    <input name="entryBrowser" id="entryC8" type="checkbox" value="c8" ${checkedContains(Browsers, "c8")} /><label for="entryC8">Chrome 8</label>
    <input name="entryBrowser" id="entrySF5" type="checkbox" value="sf5" ${checkedContains(Browsers, "sf5")} /><label for="entryC8">Safari 5</label>
    <br />
    <input name="entryBrowser" id="entryES3" type="checkbox" value="es3" ${checkedContains(Browsers, "es3")} /><label for="entryES3">ECMAScript 3</label>
    <input name="entryBrowser" id="entryES5" type="checkbox" value="es5" ${checkedContains(Browsers, "es5")} /><label for="entryES5">ECMAScript 5</label>


    <br /><br />
    <label>Short Description:</label>
    <br />
    <input id="entryShortDescription" size="80" value="${ShortDescription}" class="ui-widget-content ui-corner-all" />

    <br /><br />
    <label>Full Description:</label>
    <br />
    <textarea id="entryFullDescription" cols="80" rows="10" class="ui-corner-all">${$data.FullDescription}</textarea>

</script>