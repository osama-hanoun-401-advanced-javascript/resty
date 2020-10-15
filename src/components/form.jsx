import '../components-styles/form.scss';
import React from 'react';
import superagent from 'superagent'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textArea: false,
            url: props.formValues.url,
            method: props.formValues.method,
            body: props.formValues.body,
        }
    }
    _handleSubmit = async (e, formHandler) => {
        e.preventDefault();
        let method = e.target.method.value;
        let url = e.target.url.value;
        let textArea = this.state.textArea ? e.target.textArea.value : false;
        let data;
        let status;
        let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : localStorage.setItem('history', []);
        try {
            if (this.state.textArea) {
                data = await superagent[method](url).send(textArea);
                status = data.status;
                history.unshift({ textArea, method, url, status });
            }
            else {
                data = await superagent[method](url);
                status = data.status;
                history.unshift({ method, url, status });
            }
            localStorage.setItem('history', JSON.stringify(history));
        } catch (error) {
            data = 'Invalid Link '
        }
        let count = '5';
        formHandler(count, data, true)
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
    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <main>
                <div>
                    <form onClick={this._handleTextArea} onSubmit={(e) => this._handleSubmit(e, this.props.formHandler)}>
                        <input id="url" type="url" name="url" placeholder="url" onChange={e => this.onChangeHandler(e)} value={this.state.url ? this.state.url : ""} required />
                        <button type="submit"> GO! </button>
                        <br />
                        <input type="radio" id="get" name="method" value="get" required onChange={e => this.onChangeHandler(e)} checked={'get' === this.state.method} />
                        <label htmlFor="get">GET</label>
                        <input type="radio" id="post" name="method" value="post" required onChange={e => this.onChangeHandler(e)} checked={'post' === this.state.method} />
                        <label htmlFor="post">POST</label>
                        <input type="radio" id="put" name="method" value="put" required onChange={e => this.onChangeHandler(e)} checked={'put' === this.state.method} />
                        <label htmlFor="put">PUT</label>
                        <input type="radio" id="delete" name="method" value="delete" required onChange={e => this.onChangeHandler(e)} checked={'delete' === this.state.method} />
                        <label htmlFor="delete">DELETE</label>
                        {this.state.textArea ? < textarea name="textArea" id="body" cols="30" rows="10" value={this.state.body ? this.state.body : ''} /> : null}
                    </form >
                </div>
            </main >

        )
    }
}

export default Form;