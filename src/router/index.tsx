import { createBrowserRouter } from "react-router-dom";
import { sampleRouter } from "./sample_router";
import Layout from "../layout";
import { Menu } from "../page/menu/menu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
    },
    {
        path: "*",
        element: <Layout />,
        children: sampleRouter
    }
]);