import React, { useState } from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Login from './components/Login';

function App() {

  return (
    <>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">React-Typescript + React-Bootstrap + Font-Awesome</h1>
        <p></p>
        <Stack direction='horizontal' gap={1} style={{minHeight: 24}} className='mb-2'>
       
        </Stack>

        <Container className='ps-0'>
          <Stack direction='horizontal' gap={1}>
            <Button onClick={() => {('Button clicked!')}} variant='primary'>Click me</Button>
            <Button onClick={() => {('')}} variant='secondary'>Clear</Button>
          </Stack>
        </Container>
      </Container>
    </Container>
    
    <Login/>

    </>
  );
}

export default App;
