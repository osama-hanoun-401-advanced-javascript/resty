import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './components-styles/reset.scss'
import './components-styles/colors.scss'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Form from './components/form.jsx';
import History from './components/history.jsx'
import Results from './components/results.jsx'
import { When } from 'react-if'

class App extends React.Component {
  // init state
  state = {
    count: null,
    resultArr: null,
    footerToggle: false,
    history: JSON.parse(localStorage.getItem('history')),
    formValues: { url: NaN, method: NaN, body: NaN },
  };
  formHandler = (count, resultArr) => {
    this.setState({
      count: count,
      resultArr: resultArr,
      footerToggle: !this.state.footerToggle,
      history: JSON.parse(localStorage.getItem('history')),
    });
  }
  formValuesHandler = obj => {
    console.log('clicked-app')
    this.setState({ formValues: obj });
  }


  render() {
    return (
      <React.Fragment>
        <BrowserRouter>

          <Header />
          <Route exact path="resty/">
            <Form formHandler={this.formHandler} formValues={this.state.formValues} />
            <When condition={this.state.history !== undefined}>
              <History formValuesHandler={this.formValuesHandler} history={this.state.history} withBody={false} />
            </When>
            <When condition={!!this.state.resultArr}>
              <Results exact pa results={this.state.resultArr} />
            </When>
          </Route>
          <Route exact path="resty/History">
            <History history={this.state.history} withBody={true} />
          </Route>
          <Route exact path="resty/help">
            <p>This is help </p>
          </Route>
          <Footer footerClass={this.state.footerToggle} />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default App;
