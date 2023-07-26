import { createBrowserRouter } from "react-router-dom";
import { sampleRouter } from "./sample_router";
import Layout from "../layout";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: sampleRouter
}]);