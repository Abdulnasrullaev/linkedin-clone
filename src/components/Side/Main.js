import React, {useState} from 'react';
import styled from "styled-components";
import PostModal from "../postModal";

const MainSide = (props) => {
    const [showModal, setShowModal] = useState("close")

    const handleClick = (event) => {
        event.preventDefault()
        if (event.target !== event.currentTarget){
            return;
        }
            switch (showModal) {
                case "open":
                    setShowModal("close")
                    break;
                case "close":
                    setShowModal("open")
                    break;
                default:
                    setShowModal("close");
                    break;
            }
    }
    return (
        <Container>
            <ShareBox>Share
                <div>
                    <img src='assest/icon-user.png'/>
                    <button
                        onClick={(event)=>
                            handleClick(event)}>Start a post</button>
                </div>
                <div>
                    <button>
                        <img src='assest/icon-photo.png'/>
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src='assest/icon-video.png'/>
                        <span>Video</span>
                    </button>
                    <button>
                        <img src='assest/icon-events.png'/>
                        <span>Events</span>
                    </button>
                    <button>
                        <img src='assest/icon-article.png'/>
                        <span>Write  article</span>
                    </button>

                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src='/assest/icon-user.png'/>
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src='/assest/menu-horizontal.png'/>
                        </button>
                    </SharedActor>
                    <Descrpition>
                        description
                    </Descrpition>
                    <ShareImgs>
                        <a>
                            <img src='/assest/image-1.jpg'/>
                        </a>
                    </ShareImgs>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src='/assest/likes.svg'/>
                                <img src='/assest/claps.svg'/>
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>2 comments</a>
                        </li>
                    </SocialCounts>
                    <SocialAction>
                        <button>
                            <img src='/assest/likes-linkedin.png'/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src='/assest/comment-linkedin.png'/>
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src='/assest/share-linkedin.png'/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src='/assest/message-linkedin.png'/>
                            <span>Send</span>
                        </button>
                    </SocialAction>
                </Article>
            </div>
            <PostModal showModal={showModal} handleClick={handleClick}/>
        </Container>
    );
};

const Container = styled.div`
  grid-area: main;
  margin: 0px 12px;
`

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
  padding: 12px;`

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      min-height: 48px;
      line-height: 1.5;
      font-size: 14px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 52px;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background: #fff;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }

        span {
          color: #70b5f9;
        }
      }
    }
  }
`

const Article = styled(CommonCard)`
  padding: 0;
  overflow: visible;
  margin: 0 0 8px;
`

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      height: 48px;
    }

    & > div {
      flex-direction: column;
      display: flex;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 10px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n+1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);

        }

      }
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 12px;
    background: transparent;
    border: none;
  }
`

const Descrpition = styled.div`
  overflow: hidden;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  font-size: 14px;
  text-transform: capitalize;
`

const ShareImgs = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const SocialCounts = styled.ul`
  list-style: none;
  line-height: 1.3;
  display: flex;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  align-items: flex-start;
  border-bottom: 1px solid #e9e5df;

  li {
    margin: 0 5px 0 0;
    font-size: 12px;

    button {
      outline: none;
      display: flex;
      background: transparent;
      border: none;
    }
  }
`

const SocialAction = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    color: #0a66c2;
    padding: 8px;
    outline: none;

    img {
      fill: #0552A6;
    }

    span {
    }

    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`

export default MainSide;