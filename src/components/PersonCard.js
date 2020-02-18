import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';


class PersonCard extends Component {
  
  state = {
    person: [],
    isLoading: false
  };

  componentDidMount(){

    this.setState({isLoading: true});

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token") );
    myHeaders.append("Content-Type", "application/json");

    var options = {
      method: "GET",
      headers: myHeaders
    };

    fetch("/person", options)
      .then(response => response.json())
      .then(json => {
        this.setState({ person: json, isLoading: false });
      }).catch(error => console.log('error', error));

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
              {  person.map( item => (
                
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
