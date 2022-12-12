import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

const RegisterationForm = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phonenumber, setPhone] = useState("");
    const [email_id, setEmail] = useState("");
    const [adharnumber, setAdhar] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conformpassword, setConformPassword] = useState("");
    const [pincode, setPinCode] = useState("");
    const [types, setTypes] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var box = false;

    const handleCkeck = () => {
         box = true;
    };
    
    const register = () => { 
        setValidated(true);
            if(types.length !== 0) {
            if(name.length !== 0) {
                if(address.length !== 0) {
                    if(pincode.length === 6) {
                        if(phonenumber.length === 10) {
                            if(mail.test(email_id)===true) {
                                if(adharnumber.length === 12) {
                                    if(username.length >= 6) {
                                        if(password.length > 5) {
                                            if(password === conformpassword ) {
                                                if(box === true) {
                                                    dispatch({
                                                        type : 'REGISTER',
                                                        payload : {
                                                        id : (new Date()).getTime(),
                                                            types,
                                                            name, 
                                                            address,
                                                            pincode,
                                                            phonenumber,
                                                            email_id,
                                                            adharnumber,
                                                            username,
                                                            password
                                                        }
                                                      })
                                                      alert("Successfully Registered");
                                                      navigate('/FarmLogin');   
                                                }else{
                                                    document.querySelector('#check').focus();
                                                }
                                            }else{
                                                document.querySelector('#conpass').focus();
                                            }
                                        }else {
                                            document.querySelector('#pass').focus();
                                        }
                                    }else {
                                        document.querySelector('#user').focus();
                                    }
                                }else {
                                    document.querySelector('#adhar').focus();
                                }
                            }else {
                                document.querySelector('#email').focus();
                            }
                        }else {
                            document.querySelector('#mobile').focus();
                        }
                    }else {
                        document.querySelector('#pin').focus();
                    }
                }else {
                    document.querySelector('#city').focus();
                }
            }else {
                   <Alert variant="danger" dismissible>
                   <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                   </Alert>
                document.querySelector('#name').focus();
            }
            }else {
                alert("Please select your Registeration type");
                document.querySelector("#type").focus();
            }
        }

  return (
    <div>
        <NavBar/>
    <div className='nav'>
    <div className='container'>
        <Card className='cards'>
        <Card.Header as="h5">REGISTER</Card.Header>
        <Card.Body>
            <Card.Title>Registeration Form</Card.Title>
            <Card.Text>
            Please provide your detail to Login.
            </Card.Text>
            <Form noValidate validated={validated} >
             <Row className='mb-3'>   
            <Form.Group as={Col} md="4" >
          <Form.Label>Login As</Form.Label>
          <Form.Select  value={types} onChange={(e) =>setTypes(e.target.value)} id="type" >
            <option value="">Choose..</option>
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
          </Form.Select>
        </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            id='name'
            placeholder="Name"
            value={name} onChange={(event) => setName(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="City"
            id='city'
            value={address} onChange={(event) => setAddress(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>PinCode</Form.Label>
          <Form.Control type="number" placeholder="PinCode" id='pin'
          value={pincode} onChange={(event) => setPinCode(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid PinCode.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group as={Col} md="4" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="MobileNumber" id='mobile'
          value={phonenumber} onChange={(event) => setPhone(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid MobileNumber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
        <Form.Label>Email address</Form.Label>
        <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id='email'
              aria-describedby="inputGroupPrepend"
              value={email_id} onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Mail Adddress.
            </Form.Control.Feedback>
          </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="4" >
          <Form.Label>Adhar Number</Form.Label>
          <Form.Control type="number" placeholder="AdharNumber" id='adhar'
          value={adharnumber} onChange={(event) => setAdhar(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid AdharNumber.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              id='user'
              aria-describedby="inputGroupPrepend"
              value={username} onChange={(event) => setUsername(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='pass'
           value={password} onChange={(event) => setPassword(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Conform Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='conpass'
           value={conformpassword} onChange={(event) => setConformPassword(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          onChange={handleCkeck}
          id='check'
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <Form.Label>
        We'll never share your details with anyone else.
        </Form.Label>
      </Form.Group>
      
      <Button type="button" onClick={register}>Submit</Button>
    </Form>
        </Card.Body>
        </Card>
    </div>
    </div>
    </div>
  )
}

export default RegisterationForm;
