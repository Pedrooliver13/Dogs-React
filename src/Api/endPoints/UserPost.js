import React from 'react';
import styled from 'styled-components';
import URL from '../Url';

const FormWrapper = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 8px auto;
`;

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((results) => results.json())
      .then((resultsJson) => {
        console.log(resultsJson);
        return resultsJson;
      });
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>User Post</h1>

      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button type="submit">Enviar</button>
    </FormWrapper>
  );
};

export default UserPost;
