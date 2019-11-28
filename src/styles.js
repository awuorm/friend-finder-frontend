import styled from "styled-components";
import app_back from "./imgs/app_back.jpg";
import form_back_6 from "./imgs/form_back_6.jpg";

export const StyledMatches = styled.div`
  text-align: center;
  color: navy;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    margin:0;
    padding:0.6em;
  }
   h6 {
    margin:0;
    padding:0.6em;
   }
  div {
    background-color: aliceblue;
    width: 50vw;
    padding: 0.5em;
    border: 1px solid lightgray;
    margin-bottom: 0.8em;
    button {
       margin: 1em;
       margin-left: 20vw;
        background-color: #4cb9e4;
        color: white;
        padding: 0.5em;
        width: 13vw;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 2vw;
          height: 3vw;
          padding-right: 0.5em;
        }
        :hover {
          background-color: navy;
          color: white;
        }
  }
`;

export const StyledQuestions = styled.div`
  text-align: center;
  color: navy;
  background-color: lightblue;

  h5 {
    margin: 0;
    padding: 1em;
  }

  div {
    background-color: aliceblue;
    width: 50vw;
    margin-left: 25vw;
    padding: 0.5em;
    border: 2px solid lightgray;
     div {
       margin: 0;
       width:50vw;
       border: none;
       padding: 0;
     }
     button {
       margin: 1em;
        background-color: navy;
        color: white;
        padding: 0.8em;
        width: 13vw;
        border: none;
        cursor: pointer;
        :hover {
          background-color: #4cb9e4;
          color: white;
        }
  }
`;

export const StyledDash = styled.div`
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid lightgray;
    figure {
      margin: 0;
      width: 15vw;
      height: 15vh;
      img {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
`;

export const StyledApp = styled.div``;

export const StyledBanner = styled.div`
  background-image: url(${app_back});
  background-size: cover;
  width: 100vw;
  height: 100vh;

  figure {
    margin: 0;
    width: 15vw;
    height: 15vh;
    img {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  div {
    margin-top: 15vh;
    text-align: center;
    background-color: white;
    width: 40vw;
    height: 40vh;
    margin-left: 30vw;
    font-family: "Pacifico", cursive;
    border-radius: 1.5em;

    p {
      color: #4a769f;
      font-weight: bold;
      font-size: 1.5em;
      padding-top: 1em;
      margin-bottom: 0;
    }
    span {
      color: lightcoral;
      margin-top: 0;
      font-weight: bold;
      font-size: 1.5em;
    }
  }
`;

export const StyledRegister = styled.div`
  width: 100vw;
  height: 100vh;
  figure {
    margin: 0;
    width: 15vw;
    height: 15vh;
    img {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
  div {
    margin-left: 25vw;
    margin-top: 10vh;
    font-size: 1em;
    background-image: url(${form_back_6});
    background-size: cover;
    height: 50%;
    width: 50%;
    border: 1px solid lightgray;
    border-top: none;

    /* border: 1px solid navy; */
    /* border-radius: 1.5em; */
    form {
      width: 50%;
      height: 90.5%;
      color: navy;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1em;
      margin-bottom: 1em;
      background-color: white;
      margin-left: 25vw;
      border: 1px solid lightgray;
      input {
        padding: 0.7em;
        border: 1px solid lightgray;
      }
      button {
        background-color: navy;
        color: white;
        padding: 0.8em;
        width: 13vw;
        border: none;
        cursor: pointer;
        :hover {
          background-color: #4cb9e4;
          color: white;
        }
      }
    }
  }
  p {
    text-align: center;
  }
`;
