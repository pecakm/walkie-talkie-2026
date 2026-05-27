import styled from 'styled-components';

import { Button, ParticipantCount } from '@/components';

export const Container = styled.section`
  position: relative;
  width: min(42rem, 100%);
  border-radius: 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  background: linear-gradient(155deg, rgba(15, 23, 42, 0.88), rgba(30, 41, 59, 0.74));
  box-shadow: 0 20px 45px rgba(2, 6, 23, 0.38);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 9% 16%, rgba(34, 211, 238, 0.2), transparent 28%),
      radial-gradient(circle at 90% 84%, rgba(129, 140, 248, 0.2), transparent 30%);
  }
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  gap: 1rem;
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: #67e8f9;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const Title = styled.h1`
  margin: 0;
  color: #f8fafc;
  font-size: clamp(1.5rem, 1.7vw + 1.1rem, 2.3rem);
  line-height: 1.2;
`;

export const Description = styled.p`
  margin: 0;
  color: #cbd5e1;
  font-size: clamp(0.95rem, 0.35vw + 0.9rem, 1.1rem);
  line-height: 1.6;
`;

export const Meta = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledParticipantCount = styled(ParticipantCount)`
  color: #f8fafc;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 999px;
  padding: 0.35rem 0.8rem;
`;

export const JoinButton = styled(Button)`
  min-width: 8rem;
`;
