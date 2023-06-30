import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../UserAuthancationPage/LoginPage";
import RegistrationPage from "../UserAuthancationPage/RegistrationPage";
import HomePage from "../HomePage/HomePage";
import MainLayout from "../../../MainLayout";
import ProtectedRoute from "../ReuseableComponents/ProtectedRoute";
import MyItemsPage from "../MyitemsPage/MyItemsPage";
import MarketPlace from "../MarketPlacePage/MarketPlace";

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
        element: <ProtectedRoute><MainLayout/></ProtectedRoute>,
        children:[
            {
                path:'',
                element: <ProtectedRoute><HomePage/></ProtectedRoute>
            },
            {
                path:'myitems',
                element: <ProtectedRoute><MyItemsPage/></ProtectedRoute>
            },
            {
                path:'marketplace',
                element: <ProtectedRoute><MarketPlace/></ProtectedRoute>
            }
        ]
    }
]);


export default route;