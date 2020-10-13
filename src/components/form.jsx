import '../components-styles/form.scss';
import React from 'react';
import superagent from 'superagent'

let _handleSubmit = async (e, formHandler) => {
    e.preventDefault();
    console.log(e.target.textArea.value);
    let data;
    try {
        if (this.state.textArea) data = await superagent[e.target.method.value](e.target.url.value).send(e.target.textArea.value)
        else data = await superagent[e.target.method.value](e.target.url.value);
    } catch (error) {
        data = 'Invalid Link '
    }

    let count = '5';

    formHandler(count, data, true)
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textArea: false
        }
    }
    _handleTextArea = (e) => {
        let clickedRadio = e.target.value;
        if (clickedRadio) {

            console.log('clickedRadio????????', clickedRadio)
            if ((['get', 'delete']).includes(clickedRadio)) {
                this.setState({ textArea: false });
            }
            else if ((['post', 'put']).includes(clickedRadio))
                this.setState({ textArea: true });
        }
    }
    render() {
        return (
            <main>
                <div>
                    <form onClick={this._handleTextArea} onSubmit={(e) => _handleSubmit(e, this.props.formHandler)}>
                        <input id="url" type="url" name="url" placeholder="url" required />
                        <button type="submit"> GO! </button>
                        <br />
                        <input type="radio" id="get" name="method" value="get" required />
                        <label htmlFor="get">GET</label>
                        <input type="radio" id="post" name="method" value="post" required />
                        <label htmlFor="post">POST</label>
                        <input type="radio" id="put" name="method" value="put" required />
                        <label htmlFor="put">PUT</label>
                        <input type="radio" id="delete" name="method" value="delete" required />
                        <label htmlFor="delete">DELETE</label>
                        {this.state.textArea ? < textarea name="textArea" id="body" cols="30" rows="10" /> : null}
                    </form >
                </div>
            </main >

        )
    }
}

export default Form;