import React from 'react';
import './components-styles/reset.scss'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Form from './components/form.jsx';

// const Header = () => {
//   return (
//     <header>
//       <h1>RESTy</h1>
//     </header>
//   )
// };

// const Footer = () => <footer>&copy 2020 401d4</footer>

// //Main
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     // init state
//     this.state = {
//       words: 'Initial State'
//     }
//   }

//   // methods inside of class
//   handleClick = e => {
//     let words = this.state.words.split('').reverse().join('');
//     // update state.words
//     this.setState({words}); // re-render 
//   }

//   handleInput = e => {
//     // update state.words
//     let words = e.target.value;
//     this.setState({words}); // re-render 
//   }

//   render() {
//     return (
//       <div>
//         <h3>{this.state.words}</h3>
//         <input onChange={this.handleInput}/>
//         <button onClick={this.handleClick}>Reverse</button>
//       </div>
//     )
//   }
// }


class App extends React.Component {
  // init state
  state = {
    method: '',
    url: '',
  };
  formHandler = (e) => {
    e.preventDefault();
    this.setState({
      method: e.target.method.value,
      url: e.target.url.value,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form submit={this.formHandler.bind(this)} method={this.state.method} url={this.state.url}
        />
        <Footer />
      </React.Fragment>
    )
  }
}
export default App;
