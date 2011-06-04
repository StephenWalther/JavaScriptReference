using System.Data.Services;
using System.Data.Services.Common;
using System.Web;
using JavaScriptReference.Models;

namespace JavaScriptReference.Services
{

    [System.ServiceModel.ServiceBehavior(IncludeExceptionDetailInFaults = true)]
    public class EntryService : DataService<ReferenceDBEntities> {
        // This method is called only once to initialize service-wide policies.
        public static void InitializeService(DataServiceConfiguration config) {
            config.UseVerboseErrors = true;
            config.SetEntitySetAccessRule("*", EntitySetRights.All);
            config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V2;
        }


        // Define a change interceptor for the Products entity set.
        [ChangeInterceptor("Entries")]
        public void OnChangeEntries(Entry entry, UpdateOperations operations) {
            if (!HttpContext.Current.Request.IsAuthenticated) {
                throw new DataServiceException("Cannot update reference unless authenticated.");
            }

        }
    }


}
