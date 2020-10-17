import '../components-styles/form.scss';
import React from 'react';
import superagent from 'superagent'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textArea: false,
            url: '',
            method: '',
            body: '',
        }
    }
    componentWillReceiveProps(nextProps) {
        // This will erase any local state updates!
        // Do not do this.
        console.log(nextProps)
        let textArea = ('postput').includes(nextProps.formValues.method) ? true : false;
        this.setState({ url: nextProps.formValues.url, method: nextProps.formValues.method, body: nextProps.formValues.body, textArea });
    }
    _handleSubmit = async (e, formHandler) => {
        e.preventDefault();
        let method = e.target.method.value;
        let url = e.target.url.value;
        let textArea = this.state.textArea ? e.target.textArea.value : false;
        console.log('url ', url, ' method ', method, ' textarea', textArea)
        let data;
        let status;
        let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
        ;
        try {
            if (this.state.textArea) {
                data = await superagent[method](url).send(textArea);
                status = data.status;
                history.unshift({ textArea, method, url, status, results: data });
            }
            else {
                data = await superagent[method](url);
                status = data.status;
                history.unshift({ method, url, status, results: data });
            }
            localStorage.setItem('history', JSON.stringify(history));
            let count = '5';
            formHandler(count, data, true)
        } catch (error) {

            console.log('Invalid Link ', typeof (history))
            data = 'Invalid Link '
        }

    }
    _handleTextArea = (e) => {
        let clickedRadio = e.target.value;
        if (clickedRadio) {

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
                        <input id="url" type="url" name="url" placeholder="url" defaultValue={this.state.url} required />
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
                        {this.state.textArea ? < textarea name="textArea" id="body" cols="30" rows="10" defaultValue={this.state.body ? this.state.body : ''} /> : null}
                    </form >
                </div>
            </main >

        )
    }
}

export default Form;