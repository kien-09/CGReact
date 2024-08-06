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
    let sortBySore = (event) => {
        let value = event.target.value;
        if (value === "") {
            getAll();
            return;
        }
        if (value == "asc") {
            let newList = [...list];
            newList.sort((a, b) => {
                return a.score - b.score;
            });
            setList(newList);
        } else {
            let newList = [...list];
            newList.sort((a, b) => {
                return b.score - a.score;
            });
            setList(newList);
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
            <select>
                <option value="">Sắp xếp điểm</option>
                <option value="asc">Tăng dần</option>
                <option value="desc">Giảm dần</option>
            </select>
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