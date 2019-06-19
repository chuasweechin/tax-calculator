import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss'

class Calculator extends React.Component {
    render() {
        return (
            <React.Fragment>
                <span className={ styles.label + " " }>Your <u>Monthly</u> Income (IDR$):</span>
                <form
                    onSubmit={ (e) => { this.props.calculateTaxHandler(e) } }
                    className={ styles.calculator  + " form-group" }
                >
                    <input
                        name="income"
                        type="number"
                        defaultValue="25000000"
                        className="form-control"
                    />
                    <button
                        type="submit"
                        className={ styles.calculatorButton + " btn btn-primary" }
                    >
                        Calculate Tax Rate
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

Calculator.propTypes = {
    calculateTaxHandler: PropTypes.func.isRequired
};

export default Calculator;