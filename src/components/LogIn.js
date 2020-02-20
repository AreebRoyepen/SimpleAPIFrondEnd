import React, { Component } from 'react';  
import { connect } from "react-redux";
import { Button, Card,  CardBody,  Col, Container,  Input, Row, FormGroup } from 'reactstrap';  
import { login } from '../redux/actionCreator/personActions';
  
class LogIn extends Component {  

  state = {  
    username: '',
    password: '',

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
      username: this.state.username,
      password: this.state.password
    }

    this.props.login(JSON.stringify(person));

  }  


  render() {    
    return (  
      <div className="app flex-row align-items-center">  

      Log In
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

const mapDispatchToProps = dispatch => {
  return {
    login: person => dispatch(login(person))
  }
}
  
export default connect(null, mapDispatchToProps)(LogIn); 