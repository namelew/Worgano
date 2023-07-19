import "./TextField.css"

const TextField = (props) => {
    const scapedPlaceholder = `${props.placeholder}...`

    let value = ''

    const onTyping = (event) => {
        value = event.target.value
        console.log(value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={value} onChange={onTyping} required={props.required} placeholder={scapedPlaceholder}></input>
        </div>
    )
}

export default TextField;