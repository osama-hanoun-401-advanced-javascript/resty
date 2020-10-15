import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './components-styles/reset.scss'
import './components-styles/colors.scss'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Form from './components/form.jsx';
import Results from './components/results.jsx'
import { When } from 'react-if'

class App extends React.Component {
  // init state
  state = {
    count: null,
    resultArr: null,
    footerToggle: false,
  };
  formHandler = (count, resultArr) => {
    this.setState({
      count: count,
      resultArr: resultArr,
      footerToggle: !this.state.footerToggle,
    });
  }


  render() {
    return (
      <React.Fragment>
        <BrowserRouter>

          <Header />
          <Route exact path="/resty">
            <Form formHandler={this.formHandler} />
            <When condition={!!this.state.resultArr}>
              <Results exact pa results={this.state.resultArr} />
            </When>
          </Route>
          <Route exact path="/History">
            <p>still didn't finish lab 28 working on it </p>
          </Route>
          <Route exact path="/help">
            <p>This is help </p>
          </Route>
          <Footer footerClass={this.state.footerToggle} />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default App;
