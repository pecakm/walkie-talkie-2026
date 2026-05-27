import { useTranslations } from 'next-intl';

import { NavbarProps } from './navbar.types';
import { Container } from './navbar.styled';

export default function Navbar({ className }: NavbarProps) {
  const t = useTranslations('navbar');

  return (
    <Container className={className}>
      {t('title')}
    </Container>
  );
}
