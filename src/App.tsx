// Andrew Barlow
// Universal Design Spring 2021 Final

// Main App .tsx File

// Imports
import React from "react";
import "./App.scss";
import * as content from "./content/content.jsx";

// Header JSX
function Header() {
  return (
    <header>
      <h1>
        <em>The Importance of Universal Design</em>
      </h1>
    </header>
  );
}

class Content extends React.Component<{}, { content: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: "why",
    };
  }

  renderLink(text: string, contentKey: string) {
    return (
      <li>
        <button onClick={() => this.setState({ content: contentKey })}>
          {text}
        </button>
      </li>
    );
  }

  renderContent(key: string) {
    switch (key) {
      case "why":
        return <content.Why />;

      case "tenets":
        return <content.Tenets />;

      case "practices":
        return <content.Practices />;

      default:
        return <content.Why />;
    }
  }

  render() {
    return (
      <>
        <nav>
          <ul>
            {this.renderLink("Why Universal Design?", "why")}
            {this.renderLink("Tenets", "tenets")}
            {this.renderLink("Practices", "practices")}
          </ul>
        </nav>
        {this.renderContent(this.state.content)}
      </>
    );
  }
}

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
