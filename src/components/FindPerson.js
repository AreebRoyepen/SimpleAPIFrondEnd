import React, { Component } from 'react'; 
import { connect } from "react-redux";
import { Button, Card,  CardBody,  Col, Container,  Input, Row, FormGroup } from 'reactstrap';  
import { findPersonByName, findP } from "../redux/actionCreator/personActions";

class FindPerson extends Component {  

  state = {  
    name: '',  
    person: {},
    loading: true
  }  

  constructor(props) {  
    super(props);  

    this.register = this.register.bind(this);
  }  

  
  register() {  
  
      console.log(this.state.name);
    this.props.findPerson(this.state.name);
  }  

  componentDidMount(){

    this.props.findP();
  }


  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  render() {    

    const {person, isLoading} = this.props;

    return (  
      <div className="app flex-row align-items-center">  
          <div className="row">  
            <div className="col-sm-12 btn btn-primary">  
            Find meee
            </div>  
          </div>  


          {isLoading ?
          
          <div>        
          <input type="text" onChange = {this.handleChange} name="name" placeholder=" name" />
          <Button onClick = {() => this.register()}> Search</Button>
          </div>

          :

          <div>
          <Container>  

          {  person.map( item => (
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                    <FormGroup disabled className="mb-3">  
                    <Input type="text"  value={item.name} placeholder=" name" />  
                    <Input type="text"  value={item.surname} placeholder=" surname" />  

                      <Input type="text"  value={item.email} placeholder=" Email" />  
                      <Input type="gender"  value={item.gender} placeholder=" gender" />  
                  </FormGroup>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
          ))}
        </Container>  
          </div>        
        }

      </div>  
    );  
  }  
}  

const mapStateToProps = state => {
  console.log(state.person.persons);
  
  return {
    person: state.person.persons,
    isLoading: state.person.isLoadingFind
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findPerson : person => dispatch(findPersonByName(person)),
    findP : () => dispatch(findP())

  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(FindPerson); 