const App = () => {
    return (
        <div>
            <Tweet
              name="Jason Tyler"
              username="Oblivion32"
              date={new Date().toDateString()}
              message="hello everyone"
            />
            <Tweet
              name="Sarah Smith"
              username="SlayQueen99"
              date={new Date().toDateString()}
              message="Here to slay"
            />
            <Tweet
              name="George Walker"
              username="PyroKing"
              date={new Date().toDateString()}
              message="hello everyone"
            />
        </div>
    )
}