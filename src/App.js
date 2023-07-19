import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name:'Programação',
      primaryColor: `#57C278`,
      secundaryColor: `#D9F7E9`,
    },
    {
      name:'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF',
    },
    {
      name:'Data Science',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2',
    },
    {
      name:'Devops',
      primaryColor: '#E06869',
      secundaryColor: '#FDE7E8',
    },
    {
      name:'Ux e Design',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5',
    },
    {
      name:'Mobile',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9',
    },
    {
      name:'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF',
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  return (
    <div className="App">
      <Banner/>
      <Form onRegistry={collaborator => setCollaborators([...collaborators, collaborator])}/>
      {teams.map(team => <Team key={team.name} name={team.name} color={team.primaryColor} backgroundColor={team.secundaryColor}/>)}
    </div>
  );
}

export default App;
