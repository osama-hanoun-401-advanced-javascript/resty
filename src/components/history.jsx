import React from 'react';
import '../components-styles/history.scss'


const history = (props) => {
    return (
        <>
            <table>
                <th>
                    <td>method</td>
                    <td>status</td>
                    <td> url</td>
                    <td>body</td>
                </th>
                {
                    props.history.map((val, i) => {
                        return <tr key={i}>
                            {Object.keys(val).map((key, j) => {
                                return <td key={j}>{val[key]}</td>
                            })}
                        </tr>
                    })
                }
            </table>
        </>
    )
};

export default history;