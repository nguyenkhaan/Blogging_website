//Define public Pages  
import Home from "../Pages/Home";
import InnerBlog from "../Pages/InnerBlog"

//Define public Routes 
const publicRoutes = [
    {
        path: '/',
        role: 'Home',
        element: <Home />
    },
    {
        path: '/InnerBlog', //Paths này sau này phải có thêm id để load ra bài Blog tương ứng, tạm suy nghĩ sau 
        role: 'InnerBlog',
        element: <InnerBlog />
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
export {publicRoutes , privateRoutes}