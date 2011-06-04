using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;

namespace JavaScriptReference.QATests {

    /// <summary>
    /// Summary description for StorageTests
    /// </summary>
    [TestClass]
    public class DefaultTests : BaseTest {



        [TestMethod]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:26303/JavaScriptReference")]
        [AspNetDevelopmentServerHost(@"C:\Users\Stephen\Documents\Repos\JavaScriptReference\JavaScriptReference\JavaScriptReference", "/JavaScriptReference")]
        public void TestPageTitle() {
            // Run test for each controller
            foreach (var controller in this.Controllers) {
                var selenium = controller.Value;
                var browserName = controller.Key;

                // Open reference page.
                selenium.Open("http://localhost:26303/JavaScriptReference/default.aspx");

                // Assert Title of page.
                Assert.AreEqual("Superexpert JavaScript Reference", selenium.GetTitle(), "Failed with " + browserName);                
            }
        }


    }

}
