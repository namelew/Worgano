import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([])

  return (
    <div className="App">
      <Banner/>
      <Form onRegistry={collaborator => setCollaborators([...collaborators, collaborator])}/>
    </div>
  );
}

export default App;
