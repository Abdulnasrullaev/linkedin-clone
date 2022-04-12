import React from 'react';
import {Container, Layout, Sections} from "./style3";
import LeftSide from "../Side/leftSide";
import MainSide from "../Side/Main";
import RightSide from "../Side/RightSide";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const Home = (props) => {
    return (
        <Container>
            {!props.user&& <Redirect to='/'/>}
            <Sections>
                <h5><a>Hiring in a hurry? - </a></h5>
                <p>Find talented props in record
                    time with Upwork and keep business moving.</p>
            </Sections>
            <Layout>
                <div><LeftSide/></div>
                <div><MainSide/></div>
                <div><RightSide/></div>
            </Layout>
        </Container>
    );
};

const mapStateToProps = (state) => {
return{
    user:state.userState.user,
}
}
export default connect(mapStateToProps)(Home);