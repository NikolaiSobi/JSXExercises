const App = () => {
    return (
        <div>
            <Person
            name="Nikolai"
            age={17}
            hobbies={["basketball", "football", "golf"]}
            />

            <Person
            name="Georgia"
            age={29}
            hobbies={["Swimming", "Yoga", "Playing video games"]}
            />

             <Person
            name="Gabri"
            age={65}
            hobbies={["Watch anime", "Eat pizza", "Read books"]}
            />
        </div>
    )
}