'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components';

import { RoomViewProps } from './roomView.types';
import { Container } from './roomView.styled';

export default function RoomView({ onLeave }: RoomViewProps) {
  const t = useTranslations('homePage.roomView');

  return (
    <Container>
      Room View
      <Button onClick={onLeave}>{t('leave')}</Button>
    </Container>
  );
}
