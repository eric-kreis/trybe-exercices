import React from 'react';

class User extends React.Component {

  render() {
    const { person } = this.props;
    const { picture, name, email, dob } = person;
    const { first, last } = name;
    const { medium } = picture;
    const { age } = dob;

    return (
      <div>
        <img src={ medium } alt="User"/>
        <h3>Name{ first }{ last }</h3>
        <p>Email:{ email }</p>
        <p>Age: { age }</p>
      </div>
    );
  }
}

export default User;
