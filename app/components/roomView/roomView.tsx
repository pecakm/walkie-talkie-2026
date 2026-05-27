'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocalParticipant } from '@livekit/components-react';

import { Button } from '@/components';

import { RoomViewProps } from './roomView.types';
import { Container, Header, PushToTalkButton } from './roomView.styled';

export default function RoomView({ onLeave }: RoomViewProps) {
  const t = useTranslations('homePage.roomView');
  const { localParticipant } = useLocalParticipant();
  const [speaking, setSpeaking] = useState(false);

  function startTalking() {
    setSpeaking(true);
    localParticipant.setMicrophoneEnabled(true);
  }

  function stopTalking() {
    setSpeaking(false);
    localParticipant.setMicrophoneEnabled(false);
  }

  return (
    <Container>
      <Header>
        <Button onClick={onLeave}>{t('leave')}</Button>
      </Header>
      <PushToTalkButton
        onMouseDown={startTalking}
        onMouseUp={stopTalking}
        onMouseLeave={stopTalking}
        onTouchStart={startTalking}
        onTouchEnd={stopTalking}
      >
        {speaking ? t('speaking') : t('holdToTalk')}
      </PushToTalkButton>
    </Container>
  );
}
