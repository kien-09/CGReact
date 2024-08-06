import './App.css';
import Covid from "./Bài tập/Covid";
import {FComponent} from "./Bài tập/FComponent";
import {ProductF} from "./Bài tập/ProductF";
import {Quocgia} from "./Bài tập/Quocgia";
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
import {User} from "./Baitap68/User";
import {HotProduct} from "./Baitap68/HotProduct";
import {Homeuser} from "./Baitap68/Homeuser";
import {Category} from "./Baitap68/Category";
import {Detailuser} from "./Baitap68/Detailuser";
import {Adminpage} from "./Baitap68/Adminpage";


function App() {
    return (
        <>
            {/*<hr/>*/}
            {/*<Link to={''}>Page A|</Link>*/}
            {/*<Link to={'register'}>Page B|</Link>*/}
            {/*<Link to={'home'}>Page C</Link>*/}
            {/*<hr/>*/}
            <Routes>
                {/*<Route path={''} element={<Login/>}/>*/}
                {/*<Route path={'register'} element={<Register/>}/>*/}
                {/*<Route path={'home'} element={<Home/>}>*/}
                {/*    <Route path={'products'} element={<Products/>}/>*/}
                {/*    <Route path={'orders'} element={<Orders/>}/>*/}
                {/*</Route>*/}
                {/*<Route path={'admin'} element={<Admin/>}>*/}
                {/*    <Route path={'products'} element={<Products/>}/>*/}
                {/*    <Route path={'users'} element={<Users/>}/>*/}
                {/*    <Route path={'students/add'} element={<Add/>}/>*/}
                {/*    <Route path={'students/detail/x'} element={<Detail/>}/>*/}
                {/*    <Route path={'students'} element={<Students/>}>*/}
                {/*        */}
                {/*        */}
                {/*    </Route>*/}
                {/*</Route>*/}
                <Route path={'user'} element={<Homeuser/>}>
                    <Route path={''} element={<User/>}></Route>
                    <Route path={'hot-product'} element={<HotProduct/>}></Route>
                    <Route path={'category'} element={<Category/>}></Route>
                    <Route path={'detail-product'} element={<Detailuser/>}></Route>
                </Route>
                <Route path={'admin'} element={<Adminpage/>}></Route>
            </Routes>
        </>
    );
}

export default App;
