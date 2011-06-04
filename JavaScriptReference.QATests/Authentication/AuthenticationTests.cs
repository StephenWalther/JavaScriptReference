using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;

namespace JavaScriptReference.QATests.Authentication {
    /// <summary>
    /// Summary description for TestValidLogin
    /// </summary>
    [TestClass]
    public class AuthenticationTests:BaseTest {




        [TestMethod]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:26303/JavaScriptReference")]
        [AspNetDevelopmentServerHost(@"C:\Users\Stephen\Documents\Repos\JavaScriptReference\JavaScriptReference\JavaScriptReference", "/JavaScriptReference")]
        public void TestValidLogin() {
            // Run test for each controller
            foreach (var controller in this.Controllers) {
                var selenium = controller.Value;
                var browserName = controller.Key;
               
                // Open reference page.
                selenium.Open("http://localhost:26303/JavaScriptReference/default.aspx");

                // Click login button displays login form
                selenium.Click("btnLogin");
                Assert.IsTrue(selenium.IsVisible("loginForm"), "Login form appears after clicking btnLogin");

                // Enter user name and password
                selenium.Type("userName", "Admin");
                selenium.Type("password", "secret");
                selenium.Click("btnDoLogin");
                
                // Should set adminMode == true
                selenium.WaitForCondition("selenium.browserbot.getCurrentWindow().adminMode==true", "30000");
            }
        }


        [TestMethod]
        [HostType("ASP.NET")]
        [UrlToTest("http://localhost:26303/JavaScriptReference")]
        [AspNetDevelopmentServerHost(@"C:\Users\Stephen\Documents\Repos\JavaScriptReference\JavaScriptReference\JavaScriptReference", "/JavaScriptReference")]
        public void TestInvalidLogin() {
            // Run test for each controller
            foreach (var controller in this.Controllers) {
                var selenium = controller.Value;
                var browserName = controller.Key;

                // Open reference page.
                selenium.Open("http://localhost:26303/JavaScriptReference/default.aspx");

                // Click login button displays login form
                selenium.Click("btnLogin");
                Assert.IsTrue(selenium.IsVisible("loginForm"), "Login form appears after clicking btnLogin");

                // Enter user name and INVALID password
                selenium.Type("userName", "Admin");
                selenium.Type("password", "bad");
                selenium.Click("btnDoLogin");

                // Should show error message
                selenium.WaitForCondition("selenium.browserbot.getCurrentWindow().$('#badLoginMessage').is(':visible')", "30000");
              
            }
        }




    
    }
}
