import {useState} from "react";

export function ProductF() {
    let [arrPro, setArrPro] = useState([
        {
            id: 1,
            name: 'Xe máy',
            price: 1000
        },
        {
            id: 2,
            name: 'ô tô',
            price: 2000
        }
    ])
    let [newArrPro, setNewArrPro] = useState({id: '', name: '', price: ''})
    let onChange = (e)=>{
        setNewArrPro({...newArrPro,[e.target.name]:e.target.value})
    }
    let clickAdd =() =>{
        setArrPro([...arrPro,newArrPro])
        setNewArrPro({id:'',name:'',price:''})
    }
    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            <input onChange={(onChange)} name={'id'} value={newArrPro.id} placeholder={"ID"}/>
            <input onChange={(onChange)} name={'name'} value={newArrPro.name} placeholder={'Name'}/>
            <input onChange={(onChange)} name={'price'} value={newArrPro.price} placeholder={'Price'}/>
            <button onClick={(clickAdd)}>Thêm</button>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {arrPro.map((pro) => (
                    <tr>
                        <td>{pro.id}</td>
                        <td>{pro.name}</td>
                        <td>{pro.price}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}