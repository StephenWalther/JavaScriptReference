using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Build.Utilities;
using System.IO;
using System.Xml;
using Microsoft.Ajax.Utilities;

namespace CombineMinifyTask {
    public class CombineMinify : Task {


        private Minifier _minifier = new Minifier();

        public override bool Execute() {

            // Find all Combine.config files
            var configs = Directory.EnumerateFiles(Directory.GetCurrentDirectory(), "Combine.config", SearchOption.AllDirectories);

            // Process each one
            foreach (var config in configs) {
                ProcessConfig(config);
            }

            return true;
        }

        private void ProcessConfig(string config) {
            // Load config file
            var doc = new XmlDocument();
            doc.Load(config);

            // Get base dir
            var baseDir = Path.GetDirectoryName(config);

            // Process JavaScript files
            ProcessScripts(baseDir, doc);

            // Process CSS files
            ProcessCSS(baseDir, doc);
        }


        void ProcessScripts(string baseDirectory, XmlDocument config) {

            // Get the script nodes
            var nodes = config.SelectNodes(@"combine/scripts/file");

            if (nodes.Count > 0) {
                // Combine all scripts
                var sb = new StringBuilder();
                foreach (XmlElement node in nodes) {
                    var scriptPath = node.GetAttribute("path");
                    if (!Path.IsPathRooted(scriptPath)) {
                        scriptPath = Path.Combine(baseDirectory, scriptPath);
                    }
                    sb.Append(File.ReadAllText(scriptPath) + ";");
                }


                // Write debug version
                var debugPath = Path.Combine(baseDirectory, "combine.debug.js");
                File.WriteAllText(debugPath, sb.ToString());

                // Minify combined file
                var minified = _minifier.MinifyJavaScript(sb.ToString());


                // Write release version
                var releasePath = Path.Combine(baseDirectory, "combine.js");
                File.WriteAllText(releasePath, minified);
            }
        }


        void ProcessCSS(string baseDirectory, XmlDocument config) {

            // Get the script nodes
            var nodes = config.SelectNodes(@"combine/styles/file");

            if (nodes.Count > 0) {

                // Combine all scripts
                var sb = new StringBuilder();
                foreach (XmlElement node in nodes) {
                    var stylePath = node.GetAttribute("path");
                    if (!Path.IsPathRooted(stylePath)) {
                        stylePath = Path.Combine(baseDirectory, stylePath);
                    }
                    sb.Append(File.ReadAllText(stylePath));
                }

                // Minify combined file
                var minified = _minifier.MinifyStyleSheet(sb.ToString());

                // Write release version
                var releasePath = Path.Combine(baseDirectory, "combine.css");
                File.WriteAllText(releasePath, minified);
            }
        }



    }
}
