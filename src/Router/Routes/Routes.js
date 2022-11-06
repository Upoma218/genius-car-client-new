import { createBrowserRouter, } from 'react-router-dom';
import Main from '../../Layouts/Main';
import About from '../../Pages/Home/About/About';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },   
            {
                path:'/services',
                element:<Services></Services>,
            }
            /* {
                path:'/blog',
                element:,
            }
            {
                path:'contact',
                element:,
            }  */
        ]
    }
])
export default router;