'use client';

import { useTranslations } from 'next-intl';

import { useParticipantCount } from '@/hooks';

import { InitViewProps } from './initView.types';
import {
  Container,
  Content,
  Description,
  Eyebrow,
  JoinButton,
  Meta,
  StyledParticipantCount,
  Title
} from './initView.styled';

export default function InitView({ onJoin }: InitViewProps) {
  const t = useTranslations('homePage.initView');
  const participantCount = useParticipantCount();

  return (
    <Container>
      <Content>
        <Eyebrow>{t('eyebrow')}</Eyebrow>
        <Title>{t('title')}</Title>
        <Description>{t('description')}</Description>
        <Meta>
          <StyledParticipantCount count={participantCount} />
          <JoinButton onClick={onJoin}>{t('join')}</JoinButton>
        </Meta>
      </Content>
    </Container>
  );
}
