import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup } from 'reactstrap';  
  
class AddPerson extends Component {  

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
     
    this.email = this.email.bind(this);  
    this.gender = this.gender.bind(this);  
    this.name = this.name.bind(this);  
    this.surname = this.surname.bind(this);  

    this.register = this.register.bind(this);
  }  
  
  
  
  email(event) {  
    this.setState({ email: event.target.value })  
  }  
  gender(event) {  
    this.setState({ gender: event.target.value })  
  }  
  surname(event) {  
    this.setState({ surname: event.target.value })  
  }  
  name(event) {  
    this.setState({ name: event.target.value })  
  }  
  
  register() {  

    var formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("surname", this.state.surname);
    formData.append("gender", this.state.gender);
    formData.append("email", this.state.email);
  
    fetch('http://localhost:8080/person/', {method : "POST" , body : formData})
      .then((response) => response.json())  
      .then((json) => this.setState({person: json}) );
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

                      <Input type="text"  value={this.state.name} onChange = { this.name} placeholder=" name" />  
                      <Input type="text"  value={this.state.surname} onChange = { this.surname}placeholder=" surname" />  
                      <Input type="text"  value={this.state.email} onChange = { this.email} placeholder=" Email" />  
                      <Input type="text"  value={this.state.gender} onChange = { this.gender} placeholder=" gender" />  
                      <Button onClick = {() => this.register()}> Add Person </Button>

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
  
export default AddPerson; 