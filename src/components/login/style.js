import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
`;

export const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: nowrap;
  justify-content: space-between;

  & > a {
    width: 135px;
    height: 34px;

    img {
      width: 135px;
      height: 34px;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

export const SignIn = styled.a`
  text-decoration: none;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`

export const Section = styled.section`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 1128px;
  position: relative;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`

export const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      object-fit: contain;
      top: 230px;
      position: initial;
      width: initial;
      height: initial;
      margin: auto;
      right: 1020px;
    }
  }

`

export const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }

`

export const Google = styled.button`
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
  height: 56px;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0/60%),
  inset 0 0 0 2px rgb(0 0 0/0%), inset 0 0 0 1px rgb(0 0 0/0);
  width: 100%;
  vertical-align: middle;
  z-index: 0;
  font-size: 20px;
  transition-duration: 167ms;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`