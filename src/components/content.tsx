// Andrew Barlow
// content.tsx
// react class component to *render* the correct content on the page
// Universal Design
// 2021

// Imports//////////////////////////////////////////////////////////////////
import { Component } from 'react'

// the actual content is pulled from these files
import Why from "../content/why"
import Tenets from "../content/tenets"
import Practices from "../content/practices"
import Auditing from "../content/auditing"


// Content class with one state var to control which content is rendered
export default class Content extends Component<{}, { content: string }> {

  // constructor- default content to the first link
  constructor(props: any) {
    super(props);
    this.state = {
      content: "why",
    };
  }

  // having the navbar and content in the same class makes it easier to pass relevant keys between them
  renderLink(text: string, contentKey: string) {
    return (
      <li>
        <button onClick={() => this.setState({ content: contentKey })}>
          {text}
        </button>
      </li>
    );
  }

  // render the actual content based on the key received
  renderContent(key: string) {
    switch (key) {
      case "why":
        return <Why />;

      case "tenets":
        return <Tenets />;

      case "practices":
        return <Practices />;

      case "auditing":
        return <Auditing />;

      default:
        return <Why />;
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
            {this.renderLink("Auditing", "auditing")}
          </ul>
        </nav>
        {this.renderContent(this.state.content)}
      </>
    );
  }
}

