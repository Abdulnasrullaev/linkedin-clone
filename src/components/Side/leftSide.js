import React from 'react';
import styled from "styled-components";
import background from '../../images/linkedin_background.svg'
import photo from '../../images/icons8-add-photo.png'
import bookmark from '../../images/bookmark.svg'
import {connect} from "react-redux";

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground/>
                    <a>
                        <Photo/>
                        <Link>Welcome, {props.user ? props.user.displayName :"there"}!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src='/assest/widget-icon.png'/>
                    </a>
                </Widget>
                <Item>
                    <span>   <img src={bookmark}/>
                    My Items
                        </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a><span>Groups</span></a>
                <a>
                    <span>
                        Events
                        <img src='/assest/plus.png'/>
                </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>

            </CommunityCard>
        </Container>
    );
};

const Container = styled.div`
  grid-area: leftside;
  margin: 0px 12px;
`

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background-image: url(${background});
  background-size: 460px;
  height: 54px;
  border-top-left-radius: 2px;
  background-position: center;
  margin: -13px -13px 0;
`;

const Photo = styled.div`
  background-image: url(${photo});
  box-shadow: none;
  background-position: center;
  background-clip: content-box;
  background-size: 60%;
  background-color: white;
  box-sizing: border-box;
  width: 72px;
  height: 72px;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -30px auto 12px;
  border-radius: 50%;
`

const AddPhotoText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  color: #0a66c2;
  font-weight: 400;
`

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  font-weight: 500;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
        line-height: 1.333;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }

        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  img {
    color: rgba(0, 0, 0, 1);
  }
`

const Item = styled.a`
  font-weight: 500;
  padding: 12px;
  font-size: 12px;
  display: block;
  text-align: left;
  span {
    display: flex;
    text-align: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);

    img {
      color: rgba(0, 0, 0, 0.6);
    }

  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  font-weight: 500;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    padding: 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }
    span{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child{
      border-top:  1px solid #d6cec2;
      padding: 12px;
      color:rgba(0,0,0,0.6);
    &:hover{
      background-color: rgba(0,0,0,0.08);
    }
    }
  }
`;



const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
    }
}
export default connect(mapStateToProps)(LeftSide);