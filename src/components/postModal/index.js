import React, {useState} from 'react';
import {
    AssetButton,
    AttackAssests,
    Container, Contents, Editor,
    Header3, PostButton, ShareComment,
    ShareCreation, SharedContent, UploadImage, UserInfo
} from "./styles";
import ReactPlayer from "react-player";
import {connect} from "react-redux";
import firebase from "firebase";
import {postArticleAPI} from "../../redux/modules/actions";


const PostModal = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [assestArea, setAssestArea] = useState('')

    const switchAssestArea = (area) => {
        setShareImage('');
        setVideoLink('');
        setAssestArea(area);
    }

    const handleChange = (e) => {
        const image = e.target.files[0]
        if (image === "" || image === undefined) {
            alert(`not an image, the files a ${typeof image}`)
            return;
        }
        setShareImage(image)
    }


    const postArticle = (event) => {
        console.log("abd")
        event.preventDefault()
        if (event.target !== event.currentTarget) {
            return;

        };

        const payload={
            image:shareImage,
            video:videoLink,
            user:props.user,
            description:editorText,
            timestamp:firebase.firestore.Timestamp.now()
        };
        props.postArticle(payload)
        reset(event)
    }
    const reset = (event) => {
        setEditorText("");
        setShareImage('');
        setVideoLink('');
        setAssestArea('');
        props.handleClick(event)
    }

    return (
        <>
            {props.showModal === "open" && (
                <Container>
                    <Contents>
                        <Header3>
                            <h2>Create a post</h2>
                            <button onClick={(event) =>
                                reset(event)}>
                                <img src='/assest/close-tag.svg'/>
                            </button>
                        </Header3>
                        <SharedContent>
                            <UserInfo>
                                {props.user.photoURL ? (
                                    <img src={props.user.photoURL}/>
                                ) : (<img src='/assest/icon-users.png'/>
                                )}
                                <span>{props.user.displayName}</span>
                            </UserInfo>
                            <Editor>
                                <textarea value={editorText}
                                          autoFocus={true}
                                          onChange={(e) =>
                                              setEditorText(e.target.value)}
                                          placeholder='What do you want to talk about?'/>
                                {assestArea === 'image' ?
                                    (<UploadImage>
                                            <input type='file'
                                                   accept='image/jpeg, image/png, image/gif'
                                                   name='image'
                                                   id='file'
                                                   style={{display: "none"}}
                                                   onChange={handleChange}
                                            />
                                            <p>
                                                <label htmlFor='file'>
                                                    select an image to share
                                                </label>
                                            </p>
                                            {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
                                        </UploadImage>
                                    ) : (
                                        assestArea === 'media' &&
                                        <>
                                            <input placeholder='Please input a video link'
                                                   value={videoLink}
                                                   onChange={(e) =>
                                                       setVideoLink(e.target.value)}

                                            />
                                            {videoLink && <ReactPlayer width={'100%'}
                                                                       url={videoLink}
                                            />}
                                        </>
                                    )}
                            </Editor>
                        </SharedContent>
                        <ShareCreation>
                            <AttackAssests>
                                <AssetButton onClick={() =>
                                    switchAssestArea("image")}>
                                    <img src='/assest/icons8-add-photo.png'/>
                                </AssetButton>
                                <AssetButton onClick={() =>
                                    switchAssestArea("media")}>
                                    <img src='/assest/share-video.png'/>
                                </AssetButton>
                            </AttackAssests>
                            <ShareComment>
                                <AssetButton>
                                    <img src='/assest/commentss.png'/>
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton
                                onClick={(event)=>postArticle(event)}
                                disabled={!editorText ? true : false}>
                                Post
                            </PostButton>
                        </ShareCreation>
                    </Contents>
                </Container>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    postArticle:(payload)=>dispatch(postArticleAPI(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(PostModal);