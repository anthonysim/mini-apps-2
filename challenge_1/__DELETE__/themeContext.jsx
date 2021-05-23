import React, { Component } from "react";
import axios from 'axios';
const { Provider, Consumer } = React.createContext();


class ThemeContextProvider extends Component {
  state = {
    results: [],
    value: 'wtf'
  };

  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value)
  }

  search = async () => {
    try {
      let res = await axios.get('http://localhost:3000/events');
      console.log(res.data[0]);
      console.log(this.state.value)

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          search: this.search,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };