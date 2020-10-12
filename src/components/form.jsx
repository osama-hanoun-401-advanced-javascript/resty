import '../components-styles/form.scss';
import React from 'react';

const form = (props) => {
    return (
        <main>
            <div>
                <form onSubmit={props.submit} target="_blank">
                    {/* <label htmlFor="url">URL</label> */}
                    <input id="url" type="text" name="url" placeholder="url" required />
                    <button type="submit"> GO! </button>
                    <br />
                    <input type="radio" id="get" name="method" value="get" required />
                    <label for="get">GET</label>
                    <input type="radio" id="post" name="method" value="post" required />
                    <label for="post">POST</label>
                    <input type="radio" id="put" name="method" value="put" required />
                    <label for="put">PUT</label>
                    <input type="radio" id="delete" name="method" value="delete" required />
                    <label for="delete">DELETE</label>
                </form>
                <table>
                    <tr>
                        <td>
                            {props.method}
                        </td>
                        <td>
                            {props.url}
                        </td>
                    </tr>
                </table>

            </div>
        </main>
    )
};

export default form;