import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllMeals from "../Layouts/AllMeals";
import Meals from "../pages/Home/Meals/Meals";
import UserLogin from "../Layouts/UserLogin";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />,
                loader:()=> fetch('http://localhost:5000/category')
            },
        ]
    },{
        path:"category",
        element:<AllMeals />,
        children:[
            {
                path:":name",
                element:<Meals />,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.name}`)
            },
            {
                path:"search/:name",
                element:<Meals />,
                loader:({params})=> fetch(`http://localhost:5000/search/${params.name}`)
            },

        ]

    }
    ,{
        path:"user",
        element:<UserLogin />,
        children:[
            {
                path:"SignIn",
                element:<Login />
            },
            {
                path:"SignUp",
                element:<SignUp />
            }
        ]
    }
])
export default router