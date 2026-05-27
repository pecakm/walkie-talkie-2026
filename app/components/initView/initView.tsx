'use client';

import { useTranslations } from 'next-intl';

import { Button, ParticipantCount } from '@/components';
import { useParticipantCount } from '@/hooks';

import { InitViewProps } from './initView.types';
import { Container } from './initView.styled';

export default function InitView({ onJoin }: InitViewProps) {
  const t = useTranslations('homePage.initView');
  const participantCount = useParticipantCount();

  return (
    <Container>
      <ParticipantCount count={participantCount} />
      <Button onClick={onJoin}>{t('join')}</Button>
    </Container>
  );
}
