import React, { Component } from 'react';  
import { connect } from "react-redux";
import { Button, Card,  CardBody,  Col, Container,  Input, Row, FormGroup } from 'reactstrap';  
import { addPerson } from "../redux/actionCreator/personActions";
  
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

    this.props.addPerson(JSON.stringify(person));

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

                      <Input type="text"   onChange = {this.handleChange} name="name" placeholder=" name" />  
                      <Input type="text"  onChange = {this.handleChange} name="surname" placeholder=" surname" />  
                      <Input type="text"   onChange = {this.handleChange} name="email" placeholder=" Email" />  
                      <Input type="text"   onChange = {this.handleChange} name="gender" placeholder=" gender" />  
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

const mapDispatchToProps = dispatch => {
  return {
    addPerson: person => dispatch(addPerson(person))
  }
}
  
export default connect(null, mapDispatchToProps)(AddPerson);
//export default AddPerson;  