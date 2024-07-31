import {Component} from "react";
import axios from "axios";

export default class Covid extends Component {
    constructor() {
        super();
        this.state = {
            list: [], key: ''
        }
    }

    componentDidMount() {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
            console.log(x.data.detail);
            let arr = [];
            for (const key in x.data.detail) {
                arr.push(x.data.detail[key])
            }
            this.setState({list: arr})
        })
    }

    render() {
        let arr = [];
        return (<>
            <input value={this.state.key} onChange={(e) => {
                this.setState({key: e.target.value})
            }}/>
            <button onClick={() => {
                axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
                    for (const key in x.data.detail) {
                        arr.push(x.data.detail[key])
                    }
                    arr = arr.sort((a, b) => -a.cases + b.cases)
                    let brr = arr.splice(0, 5)
                    this.setState({list: brr})
                })
            }}>Top 5 cases cao nhất
            </button>
            <button onClick={() => {
                axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
                    for (const key in x.data.detail) {
                        arr.push(x.data.detail[key])
                    }
                    arr = arr.sort((a, b) => -a.deaths + b.seaths)
                    let crr = arr.splice(0, 5)
                    this.setState({list: crr})
                })
            }}>Top 5 deaths cao nhất
            </button>
            <button onClick={() => {
                axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
                    for (const key in x.data.detail) {
                        arr.push(x.data.detail[key])
                    }
                    arr = arr.sort((a, b) => a.cases - b.cases)
                    this.setState({list: arr})
                })
            }}>Tang dan cases
            </button>
            <button onClick={() => {
                axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
                    for (const key in x.data.detail) {
                        arr.push(x.data.detail[key])
                    }
                    arr = arr.sort((a, b) => -a.cases + b.cases)
                    this.setState({list: arr})
                })
            }}>Giam dan cases
            </button>
            <button onClick={() => {
                axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
                    for (const key in x.data.detail) {
                        arr.push(x.data.detail[key])
                    }
                    arr = arr.sort((a, b) => a.deaths - b.deaths)
                    this.setState({list: arr})
                })
            }}>Tang dan deaths
            </button>
            <button onClick={() => {
                axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
                    for (const key in x.data.detail) {
                        arr.push(x.data.detail[key])
                    }
                    arr = arr.sort((a, b) => -a.deaths + b.deaths)
                    this.setState({list: arr})
                })
            }}>Giam dan deaths
            </button>
            {this.state.list.map(e => (<>
                {e.name.toLowerCase().includes(this.state.key.toLowerCase()) &&
                    <h2>{e.name}:{e.cases},{e.deaths}</h2>}
            </>))}
        </>)
    }
}