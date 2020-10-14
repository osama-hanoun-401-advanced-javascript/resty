import React from 'react';
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
        <Header />
        <Form formHandler={this.formHandler} />
        <When condition={!!this.state.resultArr}>
          <Results results={this.state.resultArr} />
        </When>
        <When condition={this.state.history}>
          <History history={this.state.history} />
        </When>

        <Footer footerClass={this.state.footerToggle} />
      </React.Fragment>
    )
  }
}
export default App;
