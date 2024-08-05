import {useNavigate} from "react-router-dom";

export function Detail(){
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() =>
                navigate('/admin/students')
            }>Back to List
            </button>
            <h1>Detail Student</h1>
        </>
    )
}