import styled from 'styled-components';
import { LiveKitRoom } from '@livekit/components-react';

export const Container = styled.div`
  height: calc(100dvh - 5.5rem);
  min-height: calc(100dvh - 5.5rem);
  padding: clamp(1rem, 2.2vw, 2.2rem);
  display: grid;
  place-items: center;
`;

export const StyledLiveKitRoom = styled(LiveKitRoom)`
  width: 100%;
`;
