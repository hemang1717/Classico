import { Route, Routes } from "react-router-dom"
import {Home} from "../Views/Home";
import Cards from "../Views/Cards";
import Blogs from "../Views/Blogs";
import Resume from "../Views/Resume";

const Routess = () => {
    return ( 
        <>
            <Routes>
                <Route exact path='/' element={<Blogs/>}></Route>
                <Route exact path='/cards' element={<Cards/>}></Route>
                <Route exact path='/todo' element={<Resume/>}></Route>
                <Route exact path='/resume'  element={<Home/>}></Route>
                <Route path="*" element={<h1>Page Not Found</h1>}/>          
            </Routes>
        </>
     );
}
 
export default Routess;