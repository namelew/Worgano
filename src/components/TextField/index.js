import "./TextField.css"

const TextField = (props) => {
    const scapedPlaceholder = `${props.placeholder}...`

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={scapedPlaceholder}></input>
        </div>
    )
}

export default TextField;