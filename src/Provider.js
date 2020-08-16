import React, { Component } from "react";

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
export class MyProvider extends Component {
  state = {
    card: -1,
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setCard: (card) =>
            this.setState({
              card: card,
            }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
