import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

import '../styles/login.css';
function Register() {


  const [credentials, setCredentials] = useState({
    username:undefined,
    email: undefined,
    password: undefined
  });



  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = e => {
    e.preventDefault();

  }


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
              <div className='login_container d-flex justify-content-between'>
                <div className='login_img'>
                  <img src={registerImg} alt='login imag ' />
                </div>
                <div className='login_form'>
                  <div className='user'>
                    <img src={userIcon} alt='icon' />
                  </div>
                  <h2>Register</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type='text' placeholder='user name' required id='username' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='text' placeholder='Email' required id='email' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='password' placeholder='Password' required id='password' onChange={handleChange} />
                    </FormGroup>
                    <Button type='submit' className='btn secondary__btn auth_btn'>Create Account </Button>
                  </Form>
                  <p>already have an account <Link to='/login'>Login</Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Register;