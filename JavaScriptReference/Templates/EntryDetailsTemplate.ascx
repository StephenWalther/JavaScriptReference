<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EntryDetailsTemplate.ascx.cs" Inherits="JavaScriptReference.Templates.EntryDetailsTemplate" %>

<script id="entryDetailsTemplate" type="text/jquery-tmpl">

<h1>${Name} ${Syntax}
{{if OwnerId}}
    of <a class="btnEntryDetails" href="#" data-id="${OwnerId}">${getObjectName(OwnerId)}</a>
{{/if}}
</h1>
<div>
    {{tmpl(split(Browsers)) "#browsersTemplate"}}
</div>
<div>
    ${ShortDescription}
</div>

{{if (Syntax==="object") && (getObjectMethods(Id).length) }}
<h2>Methods</h2>
<div class="entryDetailsCloud">
    {{tmpl(getObjectMethods(Id)) "#entryDetailsCloudTemplate"}}
</div>
<br style="clear:left" />
{{/if}}

{{if (Syntax==="object") && (getObjectProperties(Id).length) }}
<h2>Properties</h2>
<div class="entryDetailsCloud">
    {{tmpl(getObjectProperties(Id)) "#entryDetailsCloudTemplate"}}
</div>
<br style="clear:left" />
{{/if}}


<div>
    {{html FullDescription}}
</div>


{{if adminMode}}
<div>
    <button id="editEntry" data-id="${Id}">Edit</button>
    <button id="deleteEntry" data-id="${Id}">Delete</button>
</div>
{{/if}}

</script>