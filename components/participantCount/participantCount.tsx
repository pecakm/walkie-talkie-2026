import { useTranslations } from 'next-intl';

import { ParticipantCountProps } from './participantCount.types';
import { Container } from './participantCount.styled';

export default function ParticipantCount({ className, count }: ParticipantCountProps) {
  const t = useTranslations('participantCount');

  return (
    <Container className={className}>
      {t('inRoom')} { count }
    </Container>
  );
}
