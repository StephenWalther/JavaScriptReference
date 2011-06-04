using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Selenium;

namespace JavaScriptReference.QATests {

    [TestClass]
    public abstract class BaseTest {

        private Dictionary<string, ISelenium> _controllers;

        public Dictionary<string, ISelenium> Controllers {
            get { return _controllers; }
        }

        public BaseTest() {
            // Setup controllers for different browsers
            _controllers = new Dictionary<string, ISelenium>();
            _controllers.Add("IE", new DefaultSelenium("localhost", 4444, "*iexploreproxy", "http://localhost:26303/JavaScriptReference/"));
            _controllers.Add("Firefox", new DefaultSelenium("localhost", 4444, @"*firefox C:\Program Files (x86)\Mozilla Firefox\firefox.exe", "http://localhost:26303/JavaScriptReference/"));
            _controllers.Add("Chrome", new DefaultSelenium("localhost", 4444, @"*googlechrome", "http://localhost:26303/JavaScriptReference/"));
            _controllers.Add("Safari", new DefaultSelenium("localhost", 4444, @"*safariproxy C:\Program Files (x86)\Safari\Safari.exe", "http://localhost:26303/JavaScriptReference/"));
        
        }


        [TestInitialize]
        public virtual void TestInitialize() {
            // Start all of the controllers
            foreach (var controller in this.Controllers) {
                controller.Value.Start();
            }
        }


        [TestCleanup]
        public virtual void TestCleanup() {
            // Stop all of the controllers
            foreach (var controller in this.Controllers) {
                controller.Value.Stop();
            }
        }

    
    }
}
