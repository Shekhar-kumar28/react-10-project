import styled from "styled-components";
import {createGlobalStyle} from "styled-components";





const GlobalStyle = createGlobalStyle`

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
body{
  background-color:#32333;
  color:white;
  min-height:100vh;
}



`;


import './App.css'

function App() {

  return (
    <MainConatainer>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo"/>
        </div>
        <div className="search">
           <input type="text" placeholder="Search Food" />
        </div>
      </TopContainer>
    </MainConatainer>
  )
}

export default App

const MainConatainer = styled.div``;
const TopContainer = styled.div``;
