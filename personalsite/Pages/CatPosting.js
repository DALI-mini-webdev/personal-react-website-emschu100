class CatPosting extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    deletePosting = () =>{
        this.props.delete(this.props.id)
        console.log("deleted")
    }

    editColor = () =>{
        this.setState({color: "tabby"})
    }


    <button onClick={this.submit}> submit </button>

    submit = () => {
        var newName = {
            name:this.state.newTitle
        }
        this.props.save(this.props.id, newName);
        this.setState({editing: false});
    }


    save = (id, field) => {
        this.setState({cats:this.state.cats.update(id, (n) => { return Object.assign({}, n, field); })})
    }

    render(){

return(

    <div>
        <p>{this.props.name}, {this.props.color}</p>
        <img src = {this.props.catURL} width={100} height={100}/>
        <button onClick={this.deletePosting}>Delete</button>
        <button onClick={this.editColor}>Edit Cat's Color</button>
        </div>
)

    }

}

export default CatPosting;