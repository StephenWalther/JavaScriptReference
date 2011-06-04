using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JavaScriptReference {
    /// <summary>
    /// Summary description for Manifest
    /// </summary>
    public class Manifest : IHttpHandler {

        public void ProcessRequest(HttpContext context) {
            context.Response.ContentType = "text/cache-manifest";
            context.Response.WriteFile(context.Server.MapPath("Manifest.txt"));
        }

        public bool IsReusable {
            get {
                return false;
            }
        }
    }
}