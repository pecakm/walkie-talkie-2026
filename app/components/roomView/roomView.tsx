'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocalParticipant, useParticipants } from '@livekit/components-react';

import { Button, ParticipantCount } from '@/components';

import { RoomViewProps } from './roomView.types';
import { Container, Header, PushToTalkButton } from './roomView.styled';

export default function RoomView({ onLeave }: RoomViewProps) {
  const t = useTranslations('homePage.roomView');
  const { localParticipant } = useLocalParticipant();
  const participants = useParticipants();
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
        <ParticipantCount count={participants.length} />
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
