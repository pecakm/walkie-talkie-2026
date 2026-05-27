'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocalParticipant, useParticipants } from '@livekit/components-react';

import { Button, ParticipantCount } from '@/components';

import { isSomeoneUnmuted } from './roomView.utils';
import { RoomViewProps } from './roomView.types';
import { Container, Header, PushToTalkButton } from './roomView.styled';

export default function RoomView({ onLeave }: RoomViewProps) {
  const t = useTranslations('homePage.roomView');
  const { localParticipant } = useLocalParticipant();
  const participants = useParticipants();
  const [speaking, setSpeaking] = useState(false);
  const radioSoundRef = useRef<HTMLAudioElement | null>(null);
  const isSomeoneSpeaking = isSomeoneUnmuted(participants, localParticipant);
  const prevIsSomeoneSpeakingRef = useRef(isSomeoneSpeaking);

  useEffect(() => {
    if (prevIsSomeoneSpeakingRef.current && !isSomeoneSpeaking) {
      if (!radioSoundRef.current) {
        radioSoundRef.current = new Audio('/sounds/radio.mp3');
        radioSoundRef.current.volume = 0.5;
      }

      radioSoundRef.current.currentTime = 0;
      void radioSoundRef.current.play().catch(() => {
        // Ignore play errors (e.g. browser media policy edge-cases).
      });
    }

    prevIsSomeoneSpeakingRef.current = isSomeoneSpeaking;
  }, [isSomeoneSpeaking]);

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
        data-speaking={speaking}
        disabled={isSomeoneSpeaking}
      >
        {speaking ? t('speaking') : t('holdToTalk')}
      </PushToTalkButton>
    </Container>
  );
}
