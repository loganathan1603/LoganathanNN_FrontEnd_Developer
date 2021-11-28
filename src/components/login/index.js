import usersMockUp from '../../mocks/users.json';
import Style from './Login.module.scss';
import { Form, Alert } from 'react-bootstrap';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';

export default function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setFormSubmitState] = useState(false);
  const [authenticationError, setAuthenticationError] = useState(false);
  const validateCredentials = (e) => {
    e.preventDefault(); //to prevent form auto submit
    setFormSubmitState(true);
    setAuthenticationError(false);
    const user = usersMockUp.find(user => (user.username === userName) && (user.password === password));
    if(user){
      dispatch({type: 'LOGIN', payload: user});
      navigate('/checkout');
    }else{
      setAuthenticationError(true);
    }
  }

  return (
     <div className={Style.block}>
      <div className={Style.section}>
        <div className='section-title'>Login</div>
        <div className='section-description'>Get access to personalised shopping experience</div>
        {authenticationError && (
          <Alert variant='danger' className='mar-tp-20'>
          User account not found. Please check your username/ password again.
          </Alert>
        )}
        <Form className='mar-tp-20'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control isInvalid={(isFormSubmitted && !userName) || authenticationError}
             onChange={(e) => setUserName(e.target?.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Example: john***@g**.com
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control isInvalid={(isFormSubmitted && !password) || authenticationError}
             onChange={(e) => setPassword(e.target?.value)}
            type="password" placeholder="Password" />
          </Form.Group>

          <button className='app-button' onClick={validateCredentials}>
            Login
          </button>
        </Form>

      </div>
     </div>
  )
}
