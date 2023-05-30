import React, { useState } from "react";
import styled from "styled-components";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
// import "./Button.css";

import {
  Col,
  Button,
  Form,
  Alert
} from "react-bootstrap";

const ContactFormStyle = styled.div`
.star{
  margin: 0 0 10px 0 !important;
  font-size: 10px !important;
  font-style: italic;
  text-align: justify;
}
.PhoneInputInput {
  border: none;
}
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
}

.visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s, visibility 0.3s;
}

/*loading icon*/
 
`;

function ContactForm() {
  let phone = "";
  const [scsMsg, setMsgState] = useState(false);
  const { reset, register, handleSubmit } = useForm();
  const { promiseInProgress } = usePromiseTracker();

  const API_PATH = 'https://mesohemp.com/config/index.php';

  const handleOnChange = (value) => {
    console.log(value);
    phone = value;
  };

  const onSubmit = data => {
    data["phone"] = phone;
    const info = JSON.stringify(data)
    console.log(info);
    // const webhookhUrl = '/projects/latest_version/mesohemp/config/index.php';
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    if (data["phone"].length <= 9) {
      alert("Please fill phone number correctly");
    } else if (
      data["proffesion"].length === 0 ||
      data["proffesion"] === false
    ) {
      alert("Please choose a profession");
    } else {
      trackPromise(
        axios
        .post(API_PATH, info, axiosConfig)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res);
          setMsgState(!scsMsg);
          setTimeout(() => {
            setMsgState(scsMsg);
          }, 1500)
          reset();
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err);
        })
      );
    }
  };


  return (
    <ContactFormStyle>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className='product-info-form' id='ContactForm'>
        <h3 className='heading-text'>Contact Us</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridName'>
              <Form.Control type='text' placeholder='Full Name' {...register('fullname')} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Control type='email' placeholder='Email' {...register('email')} required/>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridPhone'>
              <PhoneInput
                international
                defaultCountry="US"
                className="form-control"
                value={phone}
                // {...register(phone)}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridProf'>
              <Form.Check type='checkbox' label='Personal use' id='prof_beaut' value='Personal use' {...register('proffesion')}/>
              {/* <Form.Check type='checkbox' label='Doctor/Plastic Surgeon' id='doctor' value='Doctor/Plastic Surgeon' {...register('proffesion')}/> */}
              <Form.Check type='checkbox' label='Others' id='others' value='Others' {...register('proffesion')} />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridProf' >
              {/* <Form.Check type='checkbox' label='Clinic Owner' id='clin_owner' value='Clinic Owner' {...register('proffesion')}/> */}
              <Form.Check type='checkbox' label='Distribution' id='distributor' value='Distribution' {...register('proffesion')}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Feel free ask a question and leave your preferred contact details'
              {...register('message')}
            />
          </Form.Group>

          <p className="star">By clicking SUBMIT YOUR REQUEST, you agree to receive marketing messages from Mesohemp & Koru Pharmaceuticals at the email provided. Consent is not a condition of any purchase. Message frequency varies.</p>

          <Button variant='primary' type='submit' >
            Submit Your Request
          </Button> 
          {promiseInProgress &&  <div className="loadingio-spinner-spinner-68ljkn45nie"><div className="ldio-a6scf62lqlj"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
          {/* <BiLoaderCircle size="2em" className="spinner"/> */}
          
        </Form>
        <br/><Alert variant='success' className={`text-center ${scsMsg ? "visible" : "hidden"}`} >Your message was sent successfully. Thank you.</Alert>
      </Col>
    </ContactFormStyle>
  );
}
export default ContactForm;