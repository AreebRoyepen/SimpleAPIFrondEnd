import React, { Component } from 'react'; 
import { connect } from "react-redux";
import { deletePerson } from "../redux/actionCreator/personActions";

class DeletePerson extends Component {  

  state = {  
    id: '',  
    person: {},
    loading: true
  }  
  constructor() {  
    super();  

    this.id = this.name.bind(this);  
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  
  
  name(event) {  
    this.setState({ id: event.target.value })  
  }  
  
  register() {  
  
      console.log(this.state.id);
    // fetch('http://localhost:8080/person/' + this.state.id, {method : "DELETE"})
    //   .then((response) => response.json())  
    //   .then((json) => this.setState({person: json, loading: false} , console.log(json)) )
    //   .catch(error => console.log(error));

      this.props.deletePerson(this.state.id);
  }  



  handleChange(event){
    this.setState({id: event.target.value});
  }
  
  render() {    

    return (  
      <div className="app flex-row align-items-center">  
          <div class="row" className="mb-2 pageheading">  
            <div class="col-sm-12 btn btn-primary">  
            Delete meee
            </div>  
 
          <input type="text" value={this.state.id} onChange={this.handleChange} />
          <button onClick = {() => this.register()}> Delete By ID</button>

          </div>
 
      </div>  
    );  
  }  
}  

const mapDispatchToProps = dispatch => {

  return {
    deletePerson : person => dispatch(deletePerson)
  }

}
  
export default connect(null, mapDispatchToProps)(DeletePerson); 