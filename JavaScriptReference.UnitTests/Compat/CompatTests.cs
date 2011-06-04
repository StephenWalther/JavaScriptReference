using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JavaScriptReference.UnitTests.CompatTests {
    /// <summary>
    /// Summary description for CompatTests
    /// </summary>
    [TestClass]
    public class CompatTests {


        private JavaScriptTestHelper _jsHelper;

        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext {
            get {
                return testContextInstance;
            }
            set {
                testContextInstance = value;
            }
        }

        [TestInitialize]
        public void TestInitialize() {
            _jsHelper = new JavaScriptTestHelper(this.TestContext);
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"JavaScriptTestHelpers\JavaScriptUnitTestFramework.js");
            _jsHelper.LoadFileFromProject(Constants.ApplicationUnderTest, @"App_Scripts\compat.js");
        }

        [TestMethod]
        public void TestFilter() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"Compat\testFilter.js");
            _jsHelper.ExecuteTest();
        }

    
    }
}
