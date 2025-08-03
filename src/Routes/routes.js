//Define public Pages  
import Home from "../Pages/Home";
import InnerBlog from "../Pages/InnerBlog"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
//Define public Routes 
const publicRoutes = [
    {
        path: '/',
        role: 'Home',
        element: Home
    },
    {
        path: '/blog', //Paths này sau này phải có thêm id để load ra bài Blog tương ứng, tạm suy nghĩ sau 
        role: 'InnerBlog',
        element: InnerBlog
    },
    {
        path: '/login',
        role: 'Login',
        element: Login
    }, 
    {
        path: '/register', 
        role: 'Register', 
        element: Register
    }
]
//Define private routes 
const privateRoutes = [
    {
        path: '/admin',
        role: 'Admin',
        element: undefined
    }
]
export { publicRoutes, privateRoutes }