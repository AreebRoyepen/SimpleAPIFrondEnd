import React, { Component } from 'react';  
import { connect } from "react-redux";
import { Button, Card,  CardBody,  Col, Container,  Input, Row, FormGroup } from 'reactstrap';  
  
class LogIn extends Component {  

  state = {  
    name: '',
    surname: '',
    email: '',  
    gender: '',
    error: null,
    isLoaded: false,
  }  
  constructor() {  
    super();  
     
    this.register = this.register.bind(this);
  }  
  
 

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  register(event) {  
    const person = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      gender: this.state.gender
    }

    // var formData = new FormData();
    // formData.append('name', this.state.name);    
    // formData.append('surname', this.state.surname);
    // formData.append('email', this.state.email);
    // formData.append('gender', this.state.gender);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"username":"admin","password":"admin"});
    
    var options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('/authenticate', options)
     .then(response => response.json())
     .then((result)  => 
      {localStorage.setItem('token', "Bearer " + result.token);
       console.log(localStorage.getItem("token"))
     })
     .catch(error => console.log('error', error));

    //this.props.addPerson(formData);

  }  


  render() {    
    return (  
      <div className="app flex-row align-items-center">  

      Add mee
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                    <FormGroup disabled className="mb-3">  

                      <Input type="text"   onChange = {this.handleChange} name="username" placeholder=" username" />  
                      <Input type="password"  onChange = {this.handleChange} name="password" placeholder=" password" />  
 
                      <Button onClick = {() => this.register()}> Log In </Button>

                  </FormGroup>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div>  
        );  
  }  
}  

// const mapDispatchToProps = dispatch => {
//   return {
//     addPerson: person => dispatch(addPerson(person))
//   }
// }
  
//export default connect(null, mapDispatchToProps)(LogIn); 
export default LogIn;