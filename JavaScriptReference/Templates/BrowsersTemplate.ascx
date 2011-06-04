<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="BrowsersTemplate.ascx.cs" Inherits="JavaScriptReference.Templates.BrowsersTemplate" %>

<script id="browsersTemplate" type="text/jquery-tmpl">

{{if $data=="ff3_6"}}
    <img src="Content/browsers/ff3_6.png" alt="Firefox 3.6" title="Firefox 3.6" />
{{else $data=="ie8"}}
    <img src="Content/browsers/ie8.png" alt="Internet Explorer 8" title="Internet Explorer 8" />
{{else $data=="ie9"}}
    <img src="Content/browsers/ie9.png" alt="Internet Explorer 9" title="Internet Explorer 9"/>
{{else $data=="c8"}}
    <img src="Content/browsers/c8.png" alt="Google Chrome 8" title="Google Chrome 8"/>
{{else $data=="sf5"}}
    <img src="Content/browsers/sf5.png" alt="Apple Safari 5" title="Apple Safari 5" />
{{else $data=="es3"}}
    <img src="Content/browsers/es3.png" alt="ECMAScript 3" title="ECMAScript 3" />
{{else $data=="es5"}}
    <img src="Content/browsers/es5.png" alt="ECMAScript 5" alt="ECMAScript 5"  title="ECMAScript 5" />
{{/if}}
</script>