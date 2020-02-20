import React, { Component } from 'react';  
import { Button, Card, CardBody, Col, Container, Input, Row, FormGroup } from 'reactstrap';  
import { updatePerson, allPerson, findPersonByName, findPersonByNameEdit } from "../redux/actionCreator/personActions";
import { connect } from 'react-redux';

class EditPerson extends Component {  

    state = {  
        name: '',
        surname: '',
        email: '',  
        gender: '',
        id: '',
        person: [], 
        edit : false
    }

  constructor() {  
    super();  
 

    this.register = this.register.bind(this);
    this.register2 = this.register2.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }  
  
  register() {  
  console.log(this.state.name);
  this.props.findPerson(this.state.name);
}  
  
  register2() {  

    const {id} = this.props;

    var data = {};

    if(this.state.name != "")
      data["name"] =this.state.name;
    if(this.state.surname != "")
      data["surname"] =this.state.surname;
    if(this.state.gender != "")
      data["gender"] =this.state.gender;
    if(this.state.email != "")
      data["email"] =this.state.email;

    var data2 = {}

    data2["data"] = data;
    data2["id"] = id;


    this.props.editPerson(data2);
  }
  
  enable(){
      this.setState({edit: true, loading : false});
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {    

    const {person, loading} = this.props;
    
    return (  

        <div>
    
        {loading == false ?
        <div>          
            <input type="text" name="name" onChange={this.handleChange} />
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
                      
                      {

                        person.map( item =>(

                          <FormGroup disabled className="mb-3">  
                            
                            <Input type="text"  name="name" onChange = { this.handleChange} placeholder= {item.name} />  
                            <Input type="text"  name="surname" onChange = { this.handleChange} placeholder= {item.surname} />  
                            <Input type="text"  name= "email" onChange = { this.handleChange} placeholder= {item.email}/>  
                            <Input type="text"  name="gender" onChange = { this.handleChange} placeholder= {item.gender} />  
                            <Button onClick = {() => this.register2()}> Submit</Button>

                          </FormGroup>  

                        ))
                      }
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
                    {
                      person.map(item => (

                      <FormGroup disabled className="mb-3">  

                      <Input type="text"  value={item.name} onChange = { this.name} placeholder=" name" />  
                      <Input type="text"  value={item.surname} onChange = { this.surname} placeholder=" surname" />  
                      <Input type="text"  value={item.email} onChange = { this.email} placeholder=" Email" />  
                      <Input type="text"  value={item.gender} onChange = { this.gender} placeholder=" gender" />  
                      <Button onClick = {() => this.enable()}> Edit </Button>
                      </FormGroup>
                      ))}

                   
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
  
const mapStateToProps = state => {
  console.log(state.person.person);
  
  return {
    person: state.person.person,
    loading: state.person.isLoadingEdit,
    id: state.person.idForEdit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPerson: person => dispatch(updatePerson(person)),
    findPerson: person => dispatch(findPersonByNameEdit(person))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EditPerson);