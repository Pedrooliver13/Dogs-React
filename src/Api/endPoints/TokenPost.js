import React from 'react';
import styled from 'styled-components';
import URL from '../Url';

const FormWrapper = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 8px auto;
`;

const ParagraphBreaw = styled.p`
  word-break: break-all;
`

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((results) => results.json())
      .then((resultsJson) => {
        setToken(resultsJson.token);
        return resultsJson;
      });
  }

  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJod…ifX19.-mBxPhMKRGP36RkcSX06z5Enk9digpEH6IKVAlqAjCE

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Token Post</h1>

      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      {token && <ParagraphBreaw>{token}</ParagraphBreaw>}
      
      <button type="submit">Enviar</button>
    </FormWrapper>
  );
};

export default TokenPost;
