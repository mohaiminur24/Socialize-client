import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../UserAuthancationPage/LoginPage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    }
]);


export default route;