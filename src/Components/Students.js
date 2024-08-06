import {Link, useNavigate} from "react-router-dom";

export function Students(){
    const navigate = useNavigate();
    return(
        <>
            <button onClick={() =>
                navigate('add')
            }>Add
            </button>
            <h1>List Student</h1>
        </>
    )
}