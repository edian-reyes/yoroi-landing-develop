import React, {Component} from "react"
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';

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

class ContactUs extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section id="contact-us" style={{marginTop: "30px"}}>
        <Title style={{textAlign: "center"}}>Contact Us</Title>
        <MainContainer>
          <ContactItem style={{padding: "20px 0", backgroundColor: "#F1F7FA"}}>
            <FormContainer>
              <form>
                <TitleDescription>
                  Ask us anything! We'll get back to you within 24 - 48 hours
                </TitleDescription>
                <Input type="text" name="name" placeholder="Name"/>
                <Input type="text" name="email" placeholder="E-mail"/>
                <TitleDescription>How can we help you?</TitleDescription>
                <TextArea rows="8" name="message" placeholder="Your message"/>
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