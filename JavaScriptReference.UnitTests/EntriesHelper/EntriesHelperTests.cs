using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JavaScriptReference.UnitTests {
    /// <summary>
    /// Summary description for EntriesHelperTests
    /// </summary>
    [TestClass]
    public class EntriesHelperTests {

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
            _jsHelper.LoadFileFromProject(Constants.ApplicationUnderTest, @"App_Scripts\compat.js");            
            _jsHelper.LoadFileFromProject(Constants.ApplicationUnderTest, @"App_Scripts\entriesHelper.js");
        }

 
        [TestMethod]
        public void TestSortByIdThenLastUpdated() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testSortByIdThenLastUpdated.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestPruneDuplicates() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testPruneDuplicates.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestRemoveIsDeleted() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testRemoveIsDeleted.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestSortByName() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testSortByName.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestMergeDelete() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testMergeDelete.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestMergeAdd() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testMergeAdd.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestMergeUpdate() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testMergeUpdate.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestMergeAll() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testMergeAll.js");
            _jsHelper.ExecuteTest();
        }


        [TestMethod]
        public void TestGetLastLastUpdated() {
            _jsHelper.LoadFileFromProject(Constants.TestProject, @"EntriesHelper\testGetLastLastUpdated.js");
            _jsHelper.ExecuteTest();
        }



    }
}
