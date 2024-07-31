import {useEffect, useState} from "react";
import axios from "axios";

export function FComponent() {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    let [kq, setKQ]=useState(0);
    useEffect(() => {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
            console.log(x)
        })
    }, []);
    return (
        <>
            {/*F component {a}*/}
            {/*<button onClick={() => {*/}
            {/*    setA(a + 1)*/}
            {/*}}>Thay a*/}
            {/*</button>*/}
            <p>Number one</p>
            <input type={"text"} value={a} onChange={(e) => {
                setA(+e.target.value)
            }}/>
            <p>Number two</p>
            <input type={"text"} value={b} onChange={(e) => {
                setB(+e.target.value)
            }}/>
            <br/>
            <button onClick={() => {
                setKQ(a + b)
            }}>+
            </button>
            <button onClick={() => {
                setKQ(a - b)
            }}>-
            </button>
            <button onClick={() => {
                setKQ(a * b)
            }}>*
            </button>
            <button onClick={() => {
                setKQ(a / b)
            }}>/
            </button>
            <h1>Kết quả: {kq}</h1>
        </>
    )
}

// Lam lai 4 tinh + - * /
