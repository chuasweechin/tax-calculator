import React from 'react';
import { hot } from 'react-hot-loader';

import Calculator from './components/calculator/calculator';
import Result from './components/result/result';
import styles from './styles.scss'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            result: 0
        };
    }

    calculateTaxHandler (e) {
        e.preventDefault();

        let tax = 0;
        const annualIncome  = e.target.income.value * 12;

        const taxRate = [{
            previous: 0,
            from: 0,
            to: 50000000,
            rate: 0.05
        },
        {
            previous: 50000000,
            from: 50000001,
            to: 250000000,
            rate: 0.15
        },
        {
            previous: 250000000,
            from: 250000001,
            to: 500000000,
            rate: 0.25
        },
        {
            previous: 500000000,
            from: 500000001,
            to: Infinity,
            rate: 0.3
        }];

        for (let i = 0; i < taxRate.length; i++) {
            // this allow the previous tier tax rates to be applied
            if (annualIncome > taxRate[i].to) {
                tax += (taxRate[i].to - taxRate[i].previous) * taxRate[i].rate;
            }

            // this allow the current tier tax rates to be applied
            if (annualIncome > taxRate[i].from && annualIncome < taxRate[i].to) {
                tax += (annualIncome - taxRate[i].previous) * taxRate[i].rate;
            }
        }

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