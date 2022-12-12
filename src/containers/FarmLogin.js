import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import classNames from 'classnames';
import Col from 'react-bootstrap/Col';

const FarmLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [types, setTypes] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(state => state.log.users);
    const navigate = useNavigate();

    const login = (event) => {
        const payload = users.find(user => user.types === types && user.username === username && user.password === password)

        if(types.length !== 0) {
        if(username.length !== 0) {
          if(payload) {
            dispatch({
                type : 'LOGIN',
                payload
            })
            alert("Login Successfull");
            if(types.length === 6){
            navigate('/FarmersPage');
            }else{
              navigate('/BuyersPage');
            }
          }else{
              alert('Incorrect Credential !!')
              event.preventDefault();
              document.querySelector('#user').focus();
          }
        }else{
          alert("You are not registered!")
          event.preventDefault();
          document.querySelector('#user').focus();
        }
      }else {
        alert("Please select the proper login type!")
          event.preventDefault();
          document.querySelector('#type').focus();
      }
        
    }

    const RedisterHandler = () => {
      navigate('/RegisterationForm');
    }

    const LayoutHandler = () => {
      navigate('/');
    }

    const cardClass = classNames("card w-75","log")

  return (
    <div className='login'>
    <div className={cardClass}>
      <div className="card-body">
      <button type="button" className="btn-close" aria-label="Close" onClick={LayoutHandler}></button>
      <Form>
      <Form.Group as={Col}>
          <Form.Label>Login As</Form.Label>
          <Form.Select  value={types} onChange={(e) =>setTypes(e.target.value)} id="type">
            <option value="">Choose...</option>
            <option value="Farmer" >Farmer</option>
            <option value="Buyer" >Buyer</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" id='user' value={username} onChange={(e) =>setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" value={password} onChange={(e) =>setPassword(e.target.value)} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={login}>Login</Button>
        </Form>
        <div className='nav'>
          <h4>If you have not Registred click below button to Register</h4>
          <button className="btn btn-warning" onClick={RedisterHandler}>Register</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FarmLogin
