import {Component} from "react";

export default class Tinhtoan extends Component {
    constructor() {
        super();
        this.state = {
            num1: parseFloat(''),
            num2: parseFloat(''),
            ketqua: '',
        }
    }
    render() {
        return (
            <>
                <p>Number one:</p>
                <input type={"number"} value={this.state.num1} onChange={(e) => {
                    this.setState({num1: parseFloat(e.target.value)})
                }}/>
                <p>Number two:</p>
                <input type={"number"} value={this.state.num2} onChange={(e) => {
                    this.setState({num2: parseFloat(e.target.value)})
                }}/>
                <br/>
                <button value={this.state.ketqua} onClick={() => {
                    this.setState({ketqua: this.state.num1 + this.state.num2})
                }}>+
                </button>
                <button value={this.state.ketqua} onClick={() => {
                    this.setState({ketqua: this.state.num1 - this.state.num2})
                }}>-
                </button>
                <button value={this.state.ketqua} onClick={() => {
                    this.setState({ketqua: this.state.num1 * this.state.num2})
                }}>x
                </button>
                <button value={this.state.ketqua} onClick={() => {
                    this.setState({ketqua: this.state.num1 / this.state.num2})
                }}>/
                </button>
                <button onClick={() => {
                    this.setState({num1:'',num2:'',ketqua:''})
                }}>Clear
                </button>
                <h1>Kết quả: {this.state.ketqua}</h1>
            </>
        )
    }

}