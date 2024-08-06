import {Link, Outlet, useNavigate} from "react-router-dom";

export function Add(){
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() =>
                navigate('/admin/students')
            }>Back to List
            </button>
            <h1>Add Student</h1>
        </>
    )
}