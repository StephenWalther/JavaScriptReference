// Thanks! http://nicksnettravels.builttoroam.com/post/2010/08/03/OData-Synchronization-with-WCF-Data-Services.aspx


using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Objects;
using System.Data;

namespace JavaScriptReference.Models {
    public partial class ReferenceDBEntities {



        public override int SaveChanges(SaveOptions options) {
            var changes = this.ObjectStateManager.GetObjectStateEntries(
                                 EntityState.Modified |
                                 EntityState.Added |
                                 EntityState.Deleted);
            foreach (var change in changes) {
                var entity = change.Entity as IEntityTracking;
                if (entity != null) {
                    if (change.State == EntityState.Deleted) {
                        change.ChangeState(EntityState.Modified);
                        entity.IsDeleted = true;
                    }
                    entity.LastUpdated = DateTime.Now.Ticks;
                }
            }

            return base.SaveChanges(options);
        }
    }
}

