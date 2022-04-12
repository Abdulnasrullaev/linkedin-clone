import React from 'react';
import {Container, Form, Google, Hero, Join, Nav, Section, SignIn} from "./style";
import {connect} from "react-redux";
import {signInAPI} from "../../redux/modules/actions";
import {Redirect} from "react-router-dom";

const Login = (props) => {


    return (
        <Container>
            {props.user && <Redirect to='/home'/>}
            <Nav>
                <a href='/'>
                    <img className='img_logo' src='/assest/LinkedIn_Logo.png'/>
                </a>
                <div>
                    <Join href='/'>Join now</Join>
                    <SignIn href='/'>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/assest/linkedin_signIn.svg'/>
                </Hero>
                <Form>
                    <Google onClick={()=>props.signIn()}>
                        <img src='/assest/google_log.svg'/>
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const mapStateProps=(state)=>{
    return{
        user:state.userState.user,
    };
}
const mapDispatchToProps = (dispatch) => ({
    signIn:()=>dispatch(signInAPI())
})

export default connect(mapStateProps, mapDispatchToProps)(Login)
