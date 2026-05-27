'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components';

import { Container } from './page.styled';

export default function HomePage() {
  const t = useTranslations('homePage');

  return (
    <Container>
      <Button onClick={() => {}}>{t('join')}</Button>
    </Container>
  );
}
