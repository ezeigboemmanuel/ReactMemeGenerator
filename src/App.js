import React from "react";
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import Image from "./components/Image";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Image />
      </div>
    )
  }
}

export default App;
