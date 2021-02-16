import React from "react";
import Header from "./components/layout/Header.js";
import Contents from "./components/layout/Contents.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Contents />
      </div>
    );
  }
}

export default App;
