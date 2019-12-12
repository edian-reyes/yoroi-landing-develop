import React, {Component} from "react"
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import SweetAlert from "sweetalert-react"

const Title = styled.h2`
  color: #215F68;
`

const TitleDescription = styled.h3`
  font-weight: 400;
`

const MainContainer = styled.div`
  display: flex;
  flex-flow: wrap-reverse row;
`

const ContactItem = styled.div`
  flex-basis: 50%;
  display: flex;
`

const ContactImg = styled.div`
  background: url("./../assets/contact-us.jpg");
  background-size: cover;
  background-position: bottom;
  padding: 300px 0;
  width: 100%;
`

const FormContainer = styled.div`
  max-width: 75%;
  margin: 0 auto;
`

const Input = styled.input`
  border: solid 1px #215F68;
  border-radius: 3px;
  padding: 20px;
  width: 100%;
  margin-bottom: 25px;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  font-family: "Rubik";
`

const SubmitButton = styled.button`
  background-image: none;
  background-color: transparent;
  text-align: center;
  border: solid 2px #215F68;
  color: #215F68;
  font-weight: 500;
  padding: 15px;
  display: block;
  margin: 30px auto;
  width: 240px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.5s ease;
  font-family: "Rubik";
  letter-spacing: 2px;

  &:hover {
    font-size: 18px;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  border: solid 1px #215F68;
  border-radius: 5px;
  padding: 20px;
  resize: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  font-family: "Rubik";
`

const FormDetails = (props) => {
    return (
      <div>
        <h3>E-Mail: {props.email}</h3>
        <h3>Message: {props.message}</h3>
      </div>
    )
}

class ContactUs extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
      message: "",
      show: false
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    const {name, email, message} = this.state
    console.log(!name && !email && !message);
    
    if(!name || !email || !message) return;

    this.setState({
      show: true
    })
  }

  onChangeInput = (e) => {
    console.log({[e.target.name]: e.target.value})
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {name, email, message} = this.state
    return (
      <section id="contact-us" style={{marginTop: "30px"}}>
        <SweetAlert
        show={this.state.show}
        title={`Hi ${name}, your message was sent succesfully!`}
        text={`E-Mail: ${email} Message: ${message}`}
        type="success"
        onConfirm={() => this.setState({ show: false, name: "", email: "", message: "" })}
      />
        <Title style={{textAlign: "center"}}>Contact Us</Title>
        <MainContainer>
          <ContactItem style={{padding: "20px 0", backgroundColor: "#F1F7FA"}}>
            <FormContainer>
              <form method="POST" onSubmit={this.onSubmitForm}>
                <TitleDescription>
                  Ask us anything! We'll get back to you within 24 - 48 hours
                </TitleDescription>
                <Input type="text" name="name" value={name} placeholder="Name" onChange={this.onChangeInput}/>
                <Input type="text" name="email" value={email} placeholder="E-mail" onChange={this.onChangeInput}/>
                <TitleDescription>How can we help you?</TitleDescription>
                <TextArea rows="8" name="message" value={message} placeholder="Your message" onChange={this.onChangeInput}/>
                <SubmitButton>Learn More</SubmitButton>
              </form>
            </FormContainer>
          </ContactItem>
          <ContactItem>
            <ContactImg/>
          </ContactItem>
        </MainContainer>
      </section>
    )
  }
}

export default ContactUs