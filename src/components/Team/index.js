import Collaborator from "../Collaborator";
import "./Team.css"

const Team = (props) => {
    return (
        <section className="team" style={{ backgroundColor: props.backgroundColor }}>
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map( collaborator => <Collaborator name={collaborator.name} position={collaborator.position} img={collaborator.image}/>)}
            </div>
        </section>
    )
}

export default Team;