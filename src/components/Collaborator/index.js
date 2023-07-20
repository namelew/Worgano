import './Collaborator.css'

const Collaborator = ( {name, position, img, backgroundColor} ) => {
    return (
        <div className='collaborator'>
            <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
                <img src={img} alt={name}/>
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Collaborator;