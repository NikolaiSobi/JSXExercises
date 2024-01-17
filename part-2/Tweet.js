const Tweet = ({username, date, message, name}) => {
    return (
        <div className="tweet">
            <p className="username"> Username: {username} </p>
            <p className="message"> {message} </p>
            <p className="name"> Name: {name} </p>
            <p className="date"> {date} </p>
        </div>
    )
}