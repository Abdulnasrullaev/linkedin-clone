import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 100;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  margin-top: 0;
`

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      outline: none;
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 280px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
    }
  }
`

export const SearchIcon = styled.div`
  width: 40px;
  z-index: 1;
  top: 2px;
  left: 2px;
  border-radius: 0px 2px 2px 0;
  position: absolute;
  pointer-events: none;
  display: flex;
  horizontal-align: center;
  align-items: center;
`

export const Navs = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`

export const NavlistWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .actives {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      transition: transform .2s ease-in-out;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`

export const Navlist = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    text-decoration: none;
    position: relative;

    img {
      width: 24px;
      object-fit: contain;
    }

    span {
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`

export const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  display: none;
  transition-duration: 167ms;
`;

export const User = styled(Navlist)`

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    align-items: center;
  }
  &:hover{
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

