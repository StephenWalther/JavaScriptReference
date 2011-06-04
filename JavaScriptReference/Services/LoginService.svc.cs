using System;
using System.Configuration;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Web.Security;
using System.Threading;

namespace JavaScriptReference.Services {
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class LoginService {

        [OperationContract]
        public bool Authenticate(string userName, string password) {
            var actualUserName = ConfigurationManager.AppSettings["userName"];
            var actualPassword = ConfigurationManager.AppSettings["password"];

            if (String.Compare(userName, actualUserName, true) == 0
                && actualPassword == password) {
                FormsAuthentication.SetAuthCookie(userName, false);
                return true;
            }

            // Fails
            return false;
        }

    
    }
}
