import './Admin.css'
import {Link, Outlet, useNavigate} from "react-router-dom";
export function Admin(){
    const navigate = useNavigate()
    return (
        <>
            <div className="Admin">
                <div className="left">
                    <div className="productAd"><Link to={'/admin/products'}>Products</Link></div>
                    <div className="orderAd"><Link to={'/admin/users'}>Order</Link></div>
                    <div className="student"><Link to={'/admin/students'}>Student</Link></div>
                </div>
                <div className="right">
                    <div className="menuAdmin">Menu Admin</div>
                    <div className="listProduct">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}