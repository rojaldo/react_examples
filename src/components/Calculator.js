import React, { Component } from 'react';

const InitState = 0;
const FirstFigureState = 1;
const SecondFigureState = 2;
const ResultState = 3;

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = { display: '' };
        this.currentState = InitState;
        this.FirstFigure = 0;
        this.SecondFigure = 0;
        this.operator = '';
        this.result = 0;
    }

    handleNumber(num) {
        switch (this.currentState) {
            case InitState:
                this.FirstFigure = num;
                this.currentState = FirstFigureState;
                this.setState({ display: num })
                break;
            case FirstFigureState:
                this.FirstFigure = this.FirstFigure * 10 + num;
                this.setState({ display: String(this.state.display) + num })
                break;
            case SecondFigureState:
                this.SecondFigure = this.SecondFigure * 10 + num;
                this.setState({ display: this.state.display + num })
                break;
            case ResultState:
                this.FirstFigure = num;
                this.SecondFigure = 0;
                this.operator = '';
                this.result = 0;
                this.currentState = FirstFigureState;
                this.setState({ display: num })
                break;
            default:
                break;
        }
    }

    isOperator(symbol) {
        if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
            return true;
        } else {
            return false;
        }
    }

    resolve() {
        switch (this.operator) {
            case '+':
                return this.FirstFigure + this.SecondFigure;
            case '-':
                return this.FirstFigure - this.SecondFigure;
            case '*':
                return this.FirstFigure * this.SecondFigure;
            case '/':
                return this.FirstFigure / this.SecondFigure;
            default:
                break;
        }
    }

    handleSymbol(symbol) {
        switch (this.currentState) {
            case InitState:

                break;
            case FirstFigureState:
                if (this.isOperator(symbol)) {
                    this.operator = symbol;
                    this.currentState = SecondFigureState;
                    this.setState({ display: this.state.display + symbol })
                }
                break;
            case SecondFigureState:
                if (symbol === '=') {
                    this.result = this.resolve();
                    this.currentState = ResultState;
                    this.setState({ display: this.state.display + '=' + this.result })
                }
                break;
            case ResultState:
                if (this.isOperator(symbol)) {
                    this.FirstFigure = this.result;
                    this.SecondFigure = 0;
                    this.operator = symbol;
                    this.result = 0;
                    this.currentState = SecondFigureState;
                    this.setState({ display: this.FirstFigure + symbol })
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>

                <h4>{this.state.display}</h4>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={() => this.handleNumber(7)}>7</button></td>
                            <td><button onClick={() => this.handleNumber(8)}>8</button></td>
                            <td><button onClick={() => this.handleNumber(9)}>9</button></td>
                            <td><button onClick={() => this.handleSymbol('/')}>/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleNumber(4)}>4</button></td>
                            <td><button onClick={() => this.handleNumber(5)}>5</button></td>
                            <td><button onClick={() => this.handleNumber(6)}>6</button></td>
                            <td><button onClick={() => this.handleSymbol('*')}>*</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleNumber(1)}>1</button></td>
                            <td><button onClick={() => this.handleNumber(2)}>2</button></td>
                            <td><button onClick={() => this.handleNumber(3)}>3</button></td>
                            <td><button onClick={() => this.handleSymbol('-')}>-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleSymbol('.')}>.</button></td>
                            <td><button onClick={() => this.handleNumber(0)}>0</button></td>
                            <td><button onClick={() => this.handleSymbol('=')}>=</button></td>
                            <td><button onClick={() => this.handleSymbol('+')}>+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculator;