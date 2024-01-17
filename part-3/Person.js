const Person = ({name, age, hobbies}) => {
    name = name.slice(0,8)
    const ageText = age < 18 ? "Sorry must be 18 to vote" : "Go vote!"
    const hobbiesList = hobbies.map(hobby => <li> {hobby} </li>)

    return (
        <div>
            <p> Learn some information about {name} </p>
            <ul>
                <li> Name: {name} </li>
                <li> Age: {age} </li>
            </ul>
            <ul>
                Hobbies: {hobbiesList}
            </ul>
            <h3> {ageText} </h3>
        </div>
    )
}