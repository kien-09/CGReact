import {useEffect, useState} from "react";
import axios from "axios";

export function List() {
    let [list, setList] = useState([]);
    let [nameSearch, setNameSearch] = useState("")
    const getAll = () => {
        axios.get('http://localhost:3000/students').then(res => {
            setList(res.data)
        })
    }
    useEffect(() => {
        getAll()
    }, [])
    let findNameContain = (event) => {
        setNameSearch(event.target.value);
        let input = event.target.value;
        if (input === "") {
            getAll();
        } else {
            let newList = list.filter((item) => {
                let nameStudent = item.name;
                return nameStudent.toLowerCase().includes(input.toLowerCase());
            })
            setList(newList)
        }
    }
    return (
        <>
            <h1>Danh sách học sinh</h1>
            <input placeholder={'Nhập tên học sinh'} value={nameSearch} onChange={(event) => {
                findNameContain(event)
            }}/>
            <button onClick={() => {
                const findSocre = [...list].sort((a, b) => a.score - b.score);
                setList(findSocre)
            }}>Sắp xếp theo điểm tăng dần
            </button>
            <button onClick={() => {
                const findSocre = [...list].sort((a, b) => -a.score + b.score);
                setList(findSocre)
            }}>Sắp xếp theo điểm giảm dần
            </button>
            <table border={1}>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Action</td>
                    <td>Score</td>
                </tr>
                {
                    list.map((item) => (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.action}</td>
                                <td>{item.score}</td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}