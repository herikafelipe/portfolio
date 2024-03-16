import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../views/Homepage/homepage";
import About from "../components/about/about";
import MyServices from "../components/my-services/myservices";
import Dashboard from "../views/Dashboard/dashboard";

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/services',
                element: <MyServices/>,
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
            }

        ]
    }
])

export default router