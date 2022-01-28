import styled from 'styled-components';
import * as style from '../styleConstants';

export const Container = styled.div`
  ${style.centerH};
  position: relative;
  height: 11px;
  background: ${style.white};
  padding: 4.5px;
  box-shadow: ${style.shadow};
  ${style.halfBottomSpacer};
`;

const gameDuration = 40;

export const Bar = styled.div`
  position: relative;
  background: ${style.red};
  height: 100%;
  border-right: solid ${style.red} 4px;
  animation-name: status-bar;
  animation-timing-function: linear;
  animation-duration: ${props => props.duration}s;
  @keyframes status-bar {
    from { width: ${props => 100 - (props.duration / gameDuration) * 100}%; }
    to { width: 100%; }
  }
`;
