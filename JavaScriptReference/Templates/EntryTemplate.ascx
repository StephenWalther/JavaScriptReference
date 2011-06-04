<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EntryTemplate.ascx.cs" Inherits="JavaScriptReference.UserControls.EntryTemplate" %>

<script id="entryTemplate" type="text/jquery-tmpl">
    <div class="entry ui-corner-all">
        <div>
            <code class="entryName">${Name}</code> ${Syntax}
            {{if OwnerId}}
            of <a class="btnEntryDetails" href="#" data-id="${OwnerId}">${getObjectName(OwnerId)}</a>
            {{/if}}
        </div>
        <div>
            {{tmpl(split(Browsers)) "#browsersTemplate"}}
        </div>
        <div>
            ${ShortDescription}
        </div>
        <a class="btnEntryDetails" href="#" data-id="${Id}">Details</a> 
    </div>
    
</script>
