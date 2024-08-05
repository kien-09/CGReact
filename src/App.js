import './App.css';
import Covid from "./Covid";
import {FComponent} from "./FComponent";
import {ProductF} from "./ProductF";
import {Quocgia} from "./Quocgia";
import {List} from "./Bài tập/List";
import {Link, Route, Routes} from "react-router-dom";
import {Login} from "./Bài tập/Login";
import {Home} from "./Bài tập/Home";
import {Register} from "./Bài tập/Register";
import {Products} from "./Bài tập/Products";
import {Orders} from "./Bài tập/Orders";
import {Admin} from "./Bài tập/Admin";
import {Users} from "./Bài tập/Users";
import {Students} from "./Bài tập/Students";
import {Add} from "./Bài tập/Add";
import {Detail} from "./Bài tập/Detail";


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
