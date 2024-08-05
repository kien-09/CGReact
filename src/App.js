import './App.css';
import Covid from "./Covid";
import {FComponent} from "./FComponent";
import {ProductF} from "./ProductF";
import {Quocgia} from "./Quocgia";
import {List} from "./Component/List";
import {Link, Route, Routes} from "react-router-dom";
import {Login} from "./Component/Login";
import {Home} from "./Component/Home";
import {Register} from "./Component/Register";
import {Products} from "./Component/Products";
import {Orders} from "./Component/Orders";
import {Admin} from "./Component/Admin";
import {Users} from "./Component/Users";
import {Students} from "./Component/Students";
import {Add} from "./Component/Add";
import {Detail} from "./Component/Detail";


function App() {
    return (
        <>
            {/*<hr/>*/}
            {/*<Link to={''}>Page A|</Link>*/}
            {/*<Link to={'register'}>Page B|</Link>*/}
            {/*<Link to={'home'}>Page C</Link>*/}
            {/*<hr/>*/}
            <Routes>
                <Route path={''} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'home'} element={<Home/>}>
                    <Route path={'products'} element={<Products/>}/>
                    <Route path={'orders'} element={<Orders/>}/>
                </Route>
                <Route path={'admin'} element={<Admin/>}>
                    <Route path={'products'} element={<Products/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'students/add'} element={<Add/>}/>
                    <Route path={'students/detail/x'} element={<Detail/>}/>
                    <Route path={'students'} element={<Students/>}>


                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
