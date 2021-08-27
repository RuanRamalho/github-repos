import { React, useState } from 'react';
import { Container } from 'react-bootstrap';

import api from './services/api';
import Form from './components/Form';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState('');
  const [showRepos, setShowRepos] = useState(false);
  const [errorMessageApi, setErrorMessageApi] = useState(false);

  const handleInput = (event) => {
    setUser(event.target.value);
  };

  const listRepos = (event) => {
    event.preventDefault();
    setUser('');
    setErrorMessageApi(false);

    api
      .get(`/users/${user}/repos`)
      .then((response) => setRepositories(response.data))
      .then(setShowRepos(true))
      .catch(() => {
        setErrorMessageApi(true);
      });
  };

  return (
    <>
      <Container>
        <Form listRepos={listRepos} handleInput={handleInput} />

        {showRepos && (
          <ul>
            {repositories.map((repos) => (
              <li key={repos.id}>{repos.name}</li>
            ))}
          </ul>
        )}

        {errorMessageApi && <h1>Error 404</h1>}
      </Container>
    </>
  );
}

export default App;
