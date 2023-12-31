import "./Form.css"
import TextField from '../TextField';
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onRegistry({
            name,
            position,
            image,
            team
        })

        setImage('')
        setName('')
        setPosition('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                    required={true}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={position}
                    onChange={value => setPosition(value)}
                    required={true}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChange={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Time"
                    placeholder="Escolha seu time"
                    itens={props.teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;