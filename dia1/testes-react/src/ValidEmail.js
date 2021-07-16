import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  let color = 'black'
  if (!verifyEmail(email)) color = 'red'

  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3 style={ { color } }>
        {(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}
      </h3>
    </div>
  );
};

export default ValidEmail;