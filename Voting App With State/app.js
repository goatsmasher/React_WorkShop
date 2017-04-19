    const languageArray = [
        { id: 1, votes: 0, name: "React" },
        { id: 2, votes: 0, name: "Vue" },
        { id: 3, votes: 0, name: "Angular" },
        { id: 4, votes: 0, name: "Ember" }
    ];



    function HeaderText(props){
        return <h1>{props.text}</h1>
    }

    class Tiles extends React.Component {
        constructor(props){
            super(props)
            this.state = {libraries: props.libraries}
            this.upVote = this.upVote.bind(this)
        }
        upVote(libraryId){
            //find the right library
            const newLibraries = this.state.libraries.map((library) => {
                if(library.id === libraryId){
                    // return true;
                    library.votes += 1;
                }
                return library
            })
            console.log(newLibraries.votes)
            this.setState({libraries: newLibraries.sort()})
            //increment that votes by one
        }

        
        
        render(){
            const myList = this.state.libraries.map((libObj) => {
                return <Tile key={libObj.id} {...libObj} upVote={this.upVote}/>
            });
            return (
                <table>
                    <tbody>
                    {myList}
                    </tbody>
                </table>
            );
        }
    }

    function Tile(props){
        return (
            <tr key={props.id}>
                <td>{props.votes} votes for</td>
                <td>{props.name}</td>
                <td><button onClick={() => props.upVote(props.id)}>+</button></td>
            </tr>
        )
    }

    function App(props){
        return (
            <div>
                <HeaderText text="React!" />
                <Tiles libraries= {props.votingLibraries} />
            </div>
        )
    }
    ReactDOM.render(<App votingLibraries={languageArray} />, document.getElementById("app"));