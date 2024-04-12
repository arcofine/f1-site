
import React from "react";

export default function Widget({children}) {
       return (
              <>
                     <div className="relative bg-blueGray-100">
                            <div className="px-4  mx-auto w-full">{children}</div>
                     </div>
              </>
       );
}
