import React from 'react';
import { FormContent, Input, Button } from './styles';

const Form = ({ handleInput, listRepos }) => (
  <>
    <FormContent onSubmit={listRepos}>
      <Input
        placeholder="Digite o nome de usuário"
        type="text"
        onChange={handleInput}
      />
      <Button type="submit">Search</Button>
    </FormContent>
  </>
);

export default Form;
