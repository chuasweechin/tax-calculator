import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss'

class Result extends React.Component {
    render() {
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }

        return (
          <div>
                <table className= { styles.income + " table table-striped table-bordered"}>
                    <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Taxable Amount (IDR$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Your Monthly Tax on this Income
                            </td>
                            <td>
                                ${ formatNumber(this.props.result/12) }
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Your Annual Tax on this Income
                            </td>
                            <td>
                                ${ formatNumber(this.props.result) }
                            </td>
                        </tr>
                    </tbody>
                </table>
          </div>
        );
    }
}

Result.propTypes = {
    result: PropTypes.number.isRequired
};

export default Result;