import React from 'react';
import Message from '../Message/Message';
import GameDnd from '../GameDnd/GameDnd';
import Inputs from '../Inputs/Inputs';
import ProgressBar from '../ProgressBar/ProgressBar';
import Definitions from '../Definitions/Definitions';
import AppWrapper from './AppStyled';

const App = () => (
  <AppWrapper>
    <Message />
    <Inputs />
    <GameDnd />
    <ProgressBar />
    <Definitions />
    <div style={{color:"#ffffff",fontSize:"1em"}}>
    <a href="https://quizthis.ca">Register your Quiz This Team </a>
    </div>
    
  </AppWrapper>
);


export default App;
