import {Component} from "react";
import axios from "axios";

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: [
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
            ],
            newProduct: {
                id: '',
                name: '',
                price: ''
            },
            search: '',
            List:[]
        }
    }
    componentDidMount() {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x=>{
            console.log(x.data.detail);
            let arr=[];
            for (const key in x.data.detail){
                arr.push(x.data.detail[key])
            }
            this.setState({List:arr})
        })
    }

    render() {
        return (
            <>
                {this.state.List.map(e=>(
                    <h2>{e.name},{e.cases}</h2>
                ))}
                <hr/>
                <h1 style={{color: 'red'}}>Danh sách sản phẩm</h1>
                <input value={this.state.products.name} onChange={(e) => {
                    this.setState({search: e.target.value})
                }}/>
                {this.state.products.map(e => (
                    <>
                        {e.name.includes(this.state.search) &&
                            <h2>{e.id}.{e.name}:{e.price}</h2>}
                    </>
                ))}
                <hr/>
                id:
                <input value={this.state.newProduct.id} onChange={(e) => {
                    this.setState({newProduct: {...this.state.newProduct, id: e.target.value}})
                }}/>
                name:
                <input value={this.state.newProduct.name} onChange={(e) => {
                    this.setState({newProduct: {...this.state.newProduct, name: e.target.value}})
                }}/>
                price:
                <input value={this.state.newProduct.price} onChange={(e) => {
                    this.setState({newProduct: {...this.state.newProduct, price: e.target.value}})
                }}/>
                <button onClick={() => {
                    this.setState({
                        products: [...this.state.products, this.state.newProduct],
                        newProduct:
                            {
                                id: '',
                                name: '',
                                price: ''
                            }
                    });
                }}>Thêm
                </button>
                <button onClick={() => {
                    let list = this.state.products.sort((a, b) => a.price - b.price);
                    this.setState({products: list})
                }}>Tăng dần
                </button>
                <button onClick={() => {
                    let list = this.state.products.sort((a, b) => -a.price + b.price);
                    this.setState({products: list})
                }}>Giảm dần
                </button>
                <button onClick={() => {
                    this.setState({
                        products: [
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
                        ]
                    })
                }}>Reset
                </button>
            </>
        )
    }
}