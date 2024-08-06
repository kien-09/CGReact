import {Link, Outlet} from "react-router-dom";
import './Home.css'

export function Home(){
    return(
        <>
            <div className='Home'>
                <div className='header'>
                    <div className='logo'>Logo</div>
                    <div className='banner'>Banner</div>
                </div>
                <div className='menu'>
                    <div className='menuleft'>
                        <div className='home menu-item'><Link to={'/home'}>Home</Link></div>
                        <div className='product menu-item'><Link to={'/home/products'}>Products</Link></div>
                    </div>
                    <div className='menuright'>
                        <div className='orders menu-item'><Link to={'/home/orders'}>Orders</Link></div>
                        <div className='menu-item'><Link to={'/'}>Logout</Link></div>
                    </div>
                </div>
                <div className="main">
                    <div className="sidebar">Sidebar</div>
                    <div className="content">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}