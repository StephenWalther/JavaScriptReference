using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JavaScriptReference.Models {

    public interface IEntityTracking {
        long LastUpdated { get; set; }
        bool IsDeleted { get; set; }
    }


}
