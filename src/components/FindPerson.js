import React, { Component } from 'react'; 
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup } from 'reactstrap';  
  
class FindPerson extends Component {  

  state = {  
    name: '',  
    person: {},
    loading: true
  }  
  constructor() {  
    super();  

    this.name = this.name.bind(this);  
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  
  
  name(event) {  
    this.setState({ name: event.target.value })  
  }  
  
  register() {  
  
      console.log(this.state.name);
    fetch('http://localhost:8080/personbyname/' + this.state.name)
      .then((response) => response.json())  
      .then((json) => this.setState({person: json, loading: false} , console.log(json)) )
      .catch(error => console.log(error));
  }  



  handleChange(event){
    this.setState({name: event.target.value});
  }
  
  render() {    

    return (  
      <div className="app flex-row align-items-center">  
          <div class="row" className="mb-2 pageheading">  
            <div class="col-sm-12 btn btn-primary">  
            Find meee
            </div>  
          </div>  


          {this.state.loading ?
          
          <div>
        
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <button onClick = {() => this.register()}> Search</button>

          </div>

          :


          <div>

          <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                    <FormGroup disabled className="mb-3">  
                    <Input type="text"  value={this.state.person[0].name} placeholder=" name" />  
                    <Input type="text"  value={this.state.person[0].surname} placeholder=" surname" />  

                      <Input type="text"  value={this.state.person[0].email} placeholder=" Email" />  
                      <Input type="gender"  value={this.state.person[0].gender} placeholder=" gender" />  
                  </FormGroup>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  

          </div>

        
        
        
        
        }

            


        
      </div>  
    );  
  }  
}  
  
export default FindPerson; 