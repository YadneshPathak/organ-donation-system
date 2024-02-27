import React from "react";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Donarapplication from "./Donarapplication"
import ApplicationTable from "./ApplicationTable"

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", 
      element: <Login /> 
    },
    { path: "/browse", 
      element: <Browse />
     },
     {path: "/Donarapplication", 
      element: <Donarapplication />
     },
     {path: "/ApplicationTable", 
      element: <ApplicationTable />
     }]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
