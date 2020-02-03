import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup } from 'reactstrap';  
  
class EditPerson extends Component {  

    state = {  
        name: '',
        surname: '',
        email: '',  
        gender: '',
        id: '',
        person: [], 
        error: null,
        loading: true,
        edit : false
    }

  constructor() {  
    super();  
     
    this.email = this.email.bind(this);  
    this.gender = this.gender.bind(this);  
    this.name = this.name.bind(this);  
    this.surname = this.surname.bind(this);  

    this.register = this.register.bind(this);
    this.register2 = this.register2.bind(this);

    this.handleChange = this.handleChange.bind(this);
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
  
  fetch('http://localhost:8080/personbyname/' + this.state.name)
    .then((response) => response.json())  
    .then((json) => this.setState({person: json, loading: false}) )
    .catch(error => console.log(error));
}  
  
  register2() {  

    var formData = new FormData();
    if(this.state.name != "")
    formData.append("name", this.state.name);

    if(this.state.surname != "")
    formData.append("surname", this.state.surname);
    if(this.state.gender != "")
    formData.append("gender", this.state.gender);
    if(this.state.email != "")
    formData.append("email", this.state.email);
  
    fetch('http://localhost:8080/person/' + this.state.person[0].id, {method : "PUT" , body : formData})
      .then((response) => response.json())  
      .then((json) => {console.log(json)} ) ;
  }
  
  enable(){
      this.setState({edit: true, loading : false});
  }

  handleChange(event){
    this.setState({name: event.target.value});
  }

  render() {    
    return (  

        <div>
    
        {this.state.loading ?
        <div>          
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <button onClick = {() => this.register()}> Search</button>
        </div>
        :

        <div>

{this.state.edit ?
            <Container>  
            <Row className="justify-content-center">  
              <Col md="9" lg="7" xl="6">  
                <Card className="mx-4">  
                  <CardBody className="p-4">  
                      <FormGroup disabled className="mb-3">  
  
                        <Input type="text"  value={this.state.name} onChange = { this.name} placeholder= {this.state.person[0].name} />  
                        <Input type="text"  value={this.state.surname} onChange = { this.surname} placeholder= {this.state.person[0].surname} />  
                        <Input type="text"  value={this.state.email} onChange = { this.email} placeholder= {this.state.person[0].email}/>  
                        <Input type="text"  value={this.state.gender} onChange = { this.gender} placeholder= {this.state.person[0].gender} />  
                        <Button onClick = {() => this.register2()}> Submit</Button>
  
                    </FormGroup>  
                  </CardBody>  
                </Card>  
              </Col>  
            </Row>  
          </Container>

:

        <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                    <FormGroup disabled className="mb-3">  

                      <Input type="text"  value={this.state.person[0].name} onChange = { this.name} placeholder=" name" />  
                      <Input type="text"  value={this.state.person[0].surname} onChange = { this.surname} placeholder=" surname" />  
                      <Input type="text"  value={this.state.person[0].email} onChange = { this.email} placeholder=" Email" />  
                      <Input type="text"  value={this.state.person[0].gender} onChange = { this.gender} placeholder=" gender" />  
                      <Button onClick = {() => this.enable()}> Edit </Button>

                  </FormGroup>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div> 
        
 

    }



            </div>

 

  }
      </div>
        );  
  }  
}  
  
export default EditPerson; 