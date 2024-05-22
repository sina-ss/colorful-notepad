import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Terms from "@/pages/Terms";
import Submit from "@/pages/Submit";

export const routes = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/about-us",
            element: <AboutUs />
        },
        {
            path: "/terms",
            element: <Terms />
        },
        {
            path: "/submit",
            element: <Submit />
        }
        
    ]
}]);
