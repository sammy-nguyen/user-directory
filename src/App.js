import React, { Component } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Userpage from "./Components/Userpage";

class App extends Component {
  state = {
    pageCounter: 0,
    userPages: [],
    name: "",
    place: "",
    job: "",
    company: "",
    movies: [],
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  onLivingChange = (e) => {
    this.setState({ place: e.target.value });
  };
  onJobChange = (e) => {
    this.setState({ job: e.target.value });
  };
  onCompanyChange = (e) => {
    this.setState({ company: e.target.value });
  };
  previousBtn = (e) => {
    this.setState({ pageCounter: this.state.pageCounter - 1 });
  };

  nextBtn = (e) => {
    this.setState({ pageCounter: this.state.pageCounter + 1 });
  };

  newBtn = () => {
    const obj = {
      name: this.state.name,
      place: this.state.place,
      job: this.state.job,
      company: this.state.company,
    };

    this.setState({ userPages: [...this.state.userPages, obj] });
  };

  render() {
    const userData = this.state.userPages[this.state.pageCounter];
    return (
      <React.Fragment>
        <div className="App">
          <h1>Home</h1>
          <h2>
            {this.state.pageCounter + 1}/{this.state.userPages.length}
          </h2>
        </div>
        <Buttons
          newButton={this.newBtn}
          previousButton={this.previousBtn}
          nextButton={this.nextBtn}
        />

        <Userpage
          onNameChange={this.onNameChange}
          onLivingChange={this.onLivingChange}
          onJobChange={this.onJobChange}
          onCompanyChange={this.onCompanyChange}
          nameUser={userData ? userData.name : ""}
          address={userData ? userData.place : ""}
          job={userData ? userData.job : ""}
          company={userData ? userData.company : ""}
        />
      </React.Fragment>
    );
  }
}
export default App;
