import { createBrowserRouter } from "react-router-dom";
import { sampleRouter } from "./sample_router";
import App from "../App";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
}, ...sampleRouter]);