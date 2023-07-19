import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [collaborators, setCollaborators] = useState([])

  return (
    <div className="App">
      <Banner/>
      <Form onRegistry={collaborator => setCollaborators([...collaborators, collaborator])}/>
      <Team name="Programação"/>
      <Team name="Front-End"/>
      <Team name="Data Science"/>
    </div>
  );
}

export default App;
