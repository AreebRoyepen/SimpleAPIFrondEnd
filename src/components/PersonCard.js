import React, {Component} from 'react';
import { connect } from "react-redux";
import {Card,  CardBody, CardHeader, CardFooter} from 'reactstrap';  
import { allPerson } from "../redux/actionCreator/personActions";
import {personCard, isLoadingCard} from "../redux/reducers/personReducer";


class PersonCard extends Component {

  constructor(props) {
    super(props);
    // this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }
  
  // state = {
  //   person: [],
  //   isLoading: false
  // };

  componentDidMount(){

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", localStorage.getItem("token") );
    // myHeaders.append("Content-Type", "application/json");

    // var options = {
    //   method: "GET",
    //   headers: myHeaders
    // };

    // fetch("/person", options)
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({ person: json, isLoading: false });
    //   }).catch(error => console.log('error', error));
      
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
              {  persons.map( item => (
                
                <Card>
              <CardHeader>{item.name}, {item.surname}</CardHeader>
              <CardBody>I am {item.gender}</CardBody>
              <CardFooter>{item.email}</CardFooter> 
              </Card>
            ))
            }
            </div>
          

      );
    }
  }
}
const mapStateToProps = state => {
  console.log(state.person.persons);
  
  return {
    persons: state.person.persons,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    person: person => dispatch(personCard(person)),
    allPerson: () => dispatch(allPerson())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
