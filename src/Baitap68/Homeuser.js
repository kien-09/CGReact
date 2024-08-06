import {Link, Outlet} from "react-router-dom";
import './User.css'
export function Homeuser(){
    return (
        <>
            <div className="container">
                <div className="admin"><Link to={'/admin'}>Admin page</Link></div>
                <div className="menu-user">
                    <div className="home item"><Link to={'/user'}>Home</Link></div>
                    <div className="hot item"><Link to={'/user/hot-product'}>Hot</Link></div>
                    <div className="category item"><Link to={'/user/category'}>Category</Link></div>
                    <div className="detail item"><Link to={'/user/detail-product'}>Detail</Link></div>
                </div>
                <div className="main-user">
                    <Outlet/>
                </div>
                <div className="footer-user">Footer</div>
            </div>
        </>
    )
}