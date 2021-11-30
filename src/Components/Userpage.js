import React, {Component} from "react";
import "../App.css";

class Userpage extends Component {

  render() {
    return (
      <div className="user">
        Name:<input onChange={(e) => this.props.onNameChange(e)}></input>
        <br></br>
        From:<input onChange={(e) => this.props.onLivingChange(e)}></input>
        <br></br>
        Job Title:<input onChange={(e) => this.props.onJobChange(e)}></input>
        <br></br>
        Employer:<input onChange={(e) => this.props.onCompanyChange(e)}></input>
        <br></br>
        Name:{this.props.nameUser}
        <br />
        From:{this.props.address}
        <br />
        Job Title:{this.props.job}
        <br />
        Employer:{this.props.company}
      </div>
    );
  }
}
export default Userpage;
