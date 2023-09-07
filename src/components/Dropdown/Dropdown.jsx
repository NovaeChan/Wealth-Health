function Dropdown({name, onChange, options}){
    return (
        <select id={name} name={name} onChange={(e) => {onChange(e.target.value)}}>
            {
                options.map((option, index) => {
                    return <option key={index} value={option["abreviation"]}>{option["name"]}</option>
                })
            }
        </select>
    )
}

export default Dropdown;