import React from 'react';
import styled from 'styled-components';

function Login() {
    // * 5:12: 30
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/DisImages/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <CTALogoTwo src="/DisImages/cta-logo-two.png"/>

        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        bacground-size: cover;
        background-size: no-repeat;
        background-image: url("/DisImages/login-background.jpg");
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0; 
        right: 0;
        opacity: 0.7;
        z-index: -1;
    }
`

const CTA = styled.div`
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;


`

const CTALogoOne = styled.img``

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ce;
        
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`