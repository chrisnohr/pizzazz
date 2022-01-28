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
    <div style={{color:"#ffffff",fontSize:"0.8em"}}>
    Think this is fun? Tune in Wednesdays at 5pm and 7:30pm PST for <a href="https://quizthis.ca">Quiz This </a>, a live and interactive game show, totally FREE!
    </div>
  </AppWrapper>
);


export default App;
