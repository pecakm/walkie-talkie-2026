'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components';

import { InitViewProps } from './initView.types';
import { Container } from './initView.styled';

export default function InitView({ onJoin }: InitViewProps) {
  const t = useTranslations('homePage.initView');

  return (
    <Container>
      <Button onClick={onJoin}>{t('join')}</Button>
    </Container>
  );
}
