using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JavaScriptReference.UnitTests {
    /// <summary>
    /// Summary description for StorageTests
    /// </summary>
    [TestClass]
    public class StorageTests {

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

            // Load Standard JavaScript files
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"JavaScriptTestHelpers\JavaScriptUnitTestFramework.js");
            _jsHelper.LoadFileFromProject(Constants.ApplicationUnderTest, @"Scripts\json2.js");
            _jsHelper.LoadFileFromProject(Constants.ApplicationUnderTest, @"App_Scripts\storage.js");
        }



        [TestMethod]
        public void TestGet() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"Storage\testGet.js");
            _jsHelper.ExecuteTest();
        }
    }
}
