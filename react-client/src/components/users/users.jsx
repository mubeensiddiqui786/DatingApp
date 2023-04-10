import React, { Component } from "react";
import axios from "axios";
class User extends Component {
  state = {
    users: {},
  };

  async componentDidMount() {
    const { data: users } = await axios.get("https://localhost:7027/api/users");
    this.setState({ users });
    console.log(users);
  }
  render() {
    return <h3 className="text-blue-500">Hello</h3>;
  }
}

export default User;
