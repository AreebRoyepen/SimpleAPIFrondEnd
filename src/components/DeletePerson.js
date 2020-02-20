import React, { Component } from 'react'; 
import { connect } from "react-redux";
import { deletePerson } from "../redux/actionCreator/personActions";

class DeletePerson extends Component {  

  state = {  
    id: ''  
    }  
  constructor() {  
    super();  

    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  register() {  
    this.props.deletePerson(this.state.id);
  }  



  handleChange = (e) =>{
    this.setState({      
              [e.target.name]: e.target.value
        });
  }
  
  render() {    

    return (  
      <div className="app flex-row align-items-center">  
          <div className="row" >  
            <div className="col-sm-12 btn btn-primary">  
            Delete meee
            </div>  
 
          <input type="text" name = 'id' onChange={this.handleChange} />
          <button onClick = {() => this.register()}> Delete By ID</button>

          </div>
 
      </div>  
    );  
  }  
}  

const mapDispatchToProps = dispatch => {

  return {
    deletePerson : person => dispatch(deletePerson(person))
  }

}
  
export default connect(null, mapDispatchToProps)(DeletePerson); 