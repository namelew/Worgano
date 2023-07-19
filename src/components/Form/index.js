import "./Form.css"
import TextField from '../TextField';
import Dropdown from "../Dropdown";
import Button from "../Button";

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

    const onSave = (event) => {
        event.preventDefault()
        console.log("Form foi submetido")
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown required={true} label="Time" itens={teams}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;