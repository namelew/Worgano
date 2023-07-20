import "./Dropdown.css"

const Dropdown = (props) => {
    const scapedPlaceholder = `${props.placeholder}...`

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select placeholder={scapedPlaceholder} onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                <option key="empty"></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )   
}

export default Dropdown;