import React from 'react';
import '../components-styles/history.scss'

let _handleHistory2Form = (e, cb) => {
    // console.log(e.currentTarget.childNodes[1].innerText)
    let valuesObj = {};
    e.currentTarget.childNodes.forEach(element => {
        valuesObj[element.className] = element.innerText;
    });
    cb(valuesObj);

}
const history = (props) => {
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
                <tbody>
                    {props.history.map((val, i) => {
                        return <tr onClick={(e) => _handleHistory2Form(e, props.formValuesHandler)} key={i}>
                            {Object.keys(val).map((key, j) => {
                                return <td className={key} key={j}>{val[key]}</td>
                            })}
                        </tr>
                    })}

                </tbody>
            </table>
        </>
    )
};

export default history;