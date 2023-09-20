
function FormComponent( {} ) {
    return (
        <label>
            {labelText}
            First name:
            <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}/>
        </label>
    <br/>
    )
}