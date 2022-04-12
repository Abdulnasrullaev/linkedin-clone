import {Route, Router, Switch} from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import {useEffect} from "react";
import {getUserAuth} from "./redux/modules/actions";
import {connect} from "react-redux";

function App(props) {
    useEffect(() => {
         getUserAuth()
    }, [])
    return (
        <div className="app">
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <Route path='/home'>
                    <Header/>
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
  return{};
}
const mapDispatchToProps = (dispatch) => ({
  getUserAuth:dispatch(getUserAuth()),
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
