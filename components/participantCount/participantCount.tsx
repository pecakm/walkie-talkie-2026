import { useTranslations } from 'next-intl';

import { ParticipantCountProps } from './participantCount.types';
import { Container } from './participantCount.styled';

export default function ParticipantCount({ count }: ParticipantCountProps) {
  const t = useTranslations('participantCount');

  return (
    <Container>
      {t('inRoom')} { count }
    </Container>
  );
}
