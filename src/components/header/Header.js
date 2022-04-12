import React from 'react';
import {
    Container, Content,
    Logo, Navlist, NavlistWrap, Navs,
    Search, SearchIcon, SignOut, User, Work
} from "./styles";
import {connect} from "react-redux";
import {signOutAPI} from "../../redux/modules/actions";


const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href='/home'>
                        <img src='/assest/home_logo.svg'/>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input placeholder='Search'/>
                    </div>
                    <SearchIcon>
                        <img src='/assest/home_search.svg'/>
                    </SearchIcon>
                </Search>
                <Navs>
                    <NavlistWrap>
                        <Navlist className='actives'>
                            <a>
                                <img src='/assest/navlist_home.svg'/>
                                <span>home</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/assest/icons8-people-24.png'/>
                                <span>my network</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/assest/icons8-bag-20.png'/>
                                <span>jobs</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/assest/icons8-chat-bubble-24.png'/>
                                <span>messages</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/assest/icons8-bell-20.png'/>
                                <span>notification</span>
                            </a>
                        </Navlist>
                        <User>
                            <a>
                                {props.user && props.user.photoURL ?
                                    (<img src={props.user.photoURL}/>
                                    ) : (
                                        <img src='/assest/icons8-user-24.png'/>)}
                                <span>Me
                                <img style={{width: "24px"}} src='/assest/icons8-sort-down-30.png'/>
                                    </span>
                            </a>
                            <SignOut onClick={()=>props.signOut()}>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src='/assest/icons8-circled-menu-24.png'/>
                                <span>Work
                                <img style={{width: "14px"}} src='/assest/icons8-sort-down-30.png'/>
                                    </span>
                            </a>
                        </Work>
                    </NavlistWrap>
                </Navs>
            </Content>
        </Container>
    );
};

const mapStateToProps=(state)=>{
    return{
        user:state.userState.user
    }
}

const mapDispatchToProps=(dispatch)=>({
    signOut: ()=>dispatch(signOutAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);