import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../UserAuthancationPage/LoginPage";
import RegistrationPage from "../UserAuthancationPage/RegistrationPage";
import HomePage from "../HomePage/HomePage";
import MainLayout from "../../../MainLayout";

const route = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path:'/registration',
        element: <RegistrationPage/>
    },
    {
        path:'/home',
        element: <MainLayout/>,
        children:[
            {
                path:'',
                element: <HomePage/>
            }
        ]
    }
]);


export default route;