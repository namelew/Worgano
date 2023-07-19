import "./Form.css"
import TextField from '../TextField';
import Dropdown from "../Dropdown";

const Form = () => {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown label="Time" itens={teams}/>
            </form>
        </section>
    )
}

export default Form;