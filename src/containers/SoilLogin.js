import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import classNames from 'classnames';

const SoilLogin = () => {
    const [email_id, setEmail] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(state => state.soil.users);
    const navigate = useNavigate();

    const soil_login = (event) => {
        const payload = users.find(user => user.email_id === email_id)

        if(email_id.length !== 0) {
          if(payload) {
            dispatch({
                type : 'SLOGIN',
                payload
            })
            alert("Login Successfull");
            navigate('/ReportOfSoilTest')
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
    }

    const RedisterHandler = () => {
      navigate('/SoilRegistery');
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
        <Form.Group className="mb-3">
          <Form.Label>Email-Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email_Address" id='user' value={email_id} onChange={(e) =>setEmail(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={soil_login}>Login</Button>
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

export default SoilLogin;