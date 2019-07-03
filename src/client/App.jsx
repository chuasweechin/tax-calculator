import React from 'react';
import { hot } from 'react-hot-loader';

import Calculator from './components/calculator/calculator';
import Result from './components/result/result';
import styles from './styles.scss';
import calculatorService from "./service/calculator";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            result: 0
        };
    }

    calculateTaxHandler (e) {
        e.preventDefault();

        const annualIncome  = e.target.income.value * 12;
        const tax = calculatorService.calculate(annualIncome);

        this.setState({ "result": tax });
    }

    render() {
        return (
            <div>
                <div className={ styles.header }>
                    <h2>Tax Calculator</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <Calculator
                            calculateTaxHandler={ (e) => { this.calculateTaxHandler(e); } }
                        />
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <Result
                                result={ this.state.result }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);