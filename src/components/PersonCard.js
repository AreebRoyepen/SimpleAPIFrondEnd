import React, {Component} from 'react';
import { connect } from "react-redux";
import {Card,  CardBody, CardHeader, CardFooter} from 'reactstrap';  
import { allPerson } from "../redux/actionCreator/personActions";


class PersonCard extends Component {

  componentDidMount(){
      this.props.allPerson();
  }
  
  render (){

    const {persons} = this.props;

    if(this.props.isLoading){
      return (
          <div>
              Loading...
          </div>
      );
    }else{    
      return (
          
              
            <div>
              {  persons.map( (item, i) => (
                
              <Card key = {i}>
              <CardHeader> <h3>Name: {item.name}, Surname: {item.surname}</h3></CardHeader>
              <CardBody>I am {item.gender}</CardBody>
              <CardFooter> <h3> email address: {item.email} </h3> </CardFooter> 
              <br></br>
              </Card>
              
            ))
            }
            </div>
          

      );
    }
  }
}
const mapStateToProps = state => {
  return {
    persons: state.person.persons,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    allPerson: () => dispatch(allPerson())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
