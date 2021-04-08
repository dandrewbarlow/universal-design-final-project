// Andrew Barlow
// Universal Design Spring 2021 Final

// Main App .tsx File

// Imports
import React from 'react';
import './App.scss';

// Header JSX
class Header extends React.Component{
  render(){
    return (
      <header>
        <h1>The Importance of Universal Design</h1>
      </header>
    )}
}

// Navigation Menu
class Navbar extends React.Component{
  renderLink(text:string) {
    return (
      <li><button>{text}</button></li>
    )
  }

  render() {
    return (
      <nav>
        <ul>
          {this.renderLink('Why Universal Design?')}
          <li><button >
            Tenets
          </button></li>
          <li><button >
            Practices
          </button></li>

          {/* <li><button ></button></li>
          <li><button ></button></li> */}
        </ul>
      </nav>
    );
  }
}

class Content extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     content: 'why',
  //   }
  // }

  handleClick() {
    console.log('hi');
  }

  render() {
    return (
      <Navbar />
    );
  }

}

// Content Section: Why Universal Design
function Why() {
  return(
    <section id="why">
      <h2>Why Universal Design?</h2>
      <p>
          Universal Design is a philosophy of design whose goals are to make something that works for the largest number of people. By incorporating inclusive design methods and implementing standards designed to help impaired users, a web designer can easily create accessible websites with only a few new tools.
      </p>
    </section>

  )
}

// Content Section: Tenets of Universal Design
function Tenets() {
  return (
    <section>
      <h2>Tenets of Universal Design</h2>
      <p></p>
    </section>
  )
}

// Content Section: Practices of Universal Design
function Practices() {
  return (
    <section>
      <h2>Practices of Universal Design</h2>
      <p></p>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Why />
    </>
  );
}

export default App;
