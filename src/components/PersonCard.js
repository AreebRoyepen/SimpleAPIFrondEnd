import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';


class PersonCard extends Component {


  
  state = {
    person: [],
    isLoading: false
  };



  componentDidMount(){

    this.setState({isLoading: true});
    fetch('http://localhost:8080/person')
    //fetch('https://official-joke-api.appspot.com/random_joke')
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      .then( json => { this.setState({person: json, isLoading: false}) } );

  }


  
  render (){

    const{isLoading,person} = this.state;

    if(isLoading){
      return (
          <div>
              Loading...
          </div>
      );
    }else{    
      return (
          
              
            <div>
              {  person.map(item => (
                
                <Card>
              <CardHeader >{item.name}, {item.surname}</CardHeader>
              <CardBody >I am {item.gender}</CardBody>
              <CardFooter >{item.email}</CardFooter> 
              </Card>
            ))
            }
            </div>
          

      );
    }
  }
}

export default PersonCard;
