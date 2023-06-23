import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../UserAuthancationPage/LoginPage";
import RegistrationPage from "../UserAuthancationPage/RegistrationPage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path:'/registration',
        element: <RegistrationPage/>
    }
]);


export default route;