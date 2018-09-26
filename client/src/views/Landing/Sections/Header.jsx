import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mt-2 mb-2 text-uppercase">
              Ace your next CRA exam today.
            </h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
