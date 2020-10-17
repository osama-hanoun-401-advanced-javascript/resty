import React from 'react';
import '../components-styles/history.scss'
import { When } from 'react-if'
import Results from './results'
class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: false,
        };
    }
    _handleHistory2Form = (e, cb, withBody) => {
        if (withBody) {
            this.setState({ results: JSON.parse(e.currentTarget.attributes[0].nodeValue) })
        } else {
            let valuesObj = {};
            e.currentTarget.childNodes.forEach(element => {
                valuesObj[element.className] = element.innerText;
            });
            cb(valuesObj);
        }


    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>method</th>
                            <th>status</th>
                            <th> url</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody >
                        <When condition={this.props.history}>
                            {this.props.history.map((val, i) => {
                                return <tr dataset={JSON.stringify(val.results)} onClick={(e) => this._handleHistory2Form(e, this.props.formValuesHandler, this.props.withBody)} key={i}>
                                    {Object.keys(val).map((key, j) => {
                                        return (key !== 'results' ? <td className={key} key={j}>{val[key]}</td> : null);
                                    })}
                                </tr>
                            })}
                        </When>
                    </tbody>
                </table>
                <When condition={this.props.withBody && this.state.results}>
                    <Results results={this.state.results} />
                </When>

            </>
        )

    }
};

export default History;