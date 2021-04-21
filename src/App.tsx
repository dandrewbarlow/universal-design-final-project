// Andrew Barlow
// App.tsx
// The main wrapper for the webpage, renders everything
// Universal Design
// 2021

// Imports
// Libraries
import "./scss/App.scss";
import Content from './components/content'

// Components
import Header from './components/header'

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
