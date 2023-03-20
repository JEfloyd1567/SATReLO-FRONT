import { useState } from 'react';

import { Button, Container, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [btnMsg, setBtnMsg] = useState('');

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">React-Typescript + React-Bootstrap + Font-Awesome</h1>
        
        <Stack direction='horizontal' gap={1} style={{minHeight: 24}} className='mb-2'>
        {
          (btnMsg !== '') &&
            <>
              <p className='m-0'>{btnMsg}</p>
              <FontAwesomeIcon icon={faCoffee}/>
            </>
        }
        </Stack>

        <Container className='ps-0'>
          <Stack direction='horizontal' gap={1}>
            <Button onClick={() => {setBtnMsg('Button clicked!')}} variant='primary'>Click me</Button>
            <Button onClick={() => {setBtnMsg('')}} variant='secondary'>Clear</Button>
          </Stack>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
