import "./TextField.css"

const TextField = (props) => {
    const scapedPlaceholder = `${props.placeholder}...`

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={event => props.onChange(event.target.value)} required={props.required} placeholder={scapedPlaceholder}></input>
        </div>
    )
}

export default TextField;