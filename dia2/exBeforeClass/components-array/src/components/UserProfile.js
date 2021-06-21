import { Component } from "react";

class UserProfile extends Component {
  render() {
    const { name, email, avatar } = this.props.user;

    return (
      <section>
        <h2>{ name }</h2>
        <p>Email: { email }</p>
        <img src={ avatar } alt='User profile'/>
      </section>
    );
  }
}

export default UserProfile;