'use client';

import { useState } from 'react';
import { RoomAudioRenderer } from '@livekit/components-react';

import { InitView, RoomView } from './components';
import { Container, StyledLiveKitRoom } from './page.styled';

export default function HomePage() {
  const [token, setToken] = useState<string | null>(null);

  async function joinRoom() {
    const res = await fetch('/api/livekit-token');
    const data = await res.json();

    setToken(data.token);
  }

  function leaveRoom() {
    setToken(null);
  }

  return (
    <Container>
      {token ? (
        <StyledLiveKitRoom
          token={token}
          serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
          connect={true}
          video={false}
          audio={false}
        >
          <RoomAudioRenderer />
          <RoomView onLeave={leaveRoom} />
        </StyledLiveKitRoom>
      ) : (
        <InitView onJoin={joinRoom} />
      )}
    </Container>
  );
}
