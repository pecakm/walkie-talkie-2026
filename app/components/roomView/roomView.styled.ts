import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  gap: 1.75rem;
  align-content: center;
  width: min(42rem, 100%);
  margin-inline: auto;
  padding: clamp(1.25rem, 2vw + 0.75rem, 2rem);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 1.5rem;
  background: linear-gradient(140deg, rgba(15, 23, 42, 0.82), rgba(30, 41, 59, 0.72));
  box-shadow: 0 24px 60px rgba(2, 6, 23, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const PushToTalkButton = styled.button`
  position: relative;
  overflow: hidden;
  width: min(22rem, 100%);
  min-height: 8.5rem;
  margin-inline: auto;
  border: 0;
  border-radius: 1.4rem;
  background: linear-gradient(150deg, #22d3ee, #0ea5e9 45%, #6366f1);
  color: #f8fafc;
  font-size: clamp(1.1rem, 1vw + 0.9rem, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.01em;
  box-shadow: 0 16px 36px rgba(14, 165, 233, 0.42);
  transition: transform 120ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 180ms ease, filter 180ms ease;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  @keyframes onAirRing {
    0% {
      box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.34), 0 20px 44px rgba(14, 165, 233, 0.58);
    }
    100% {
      box-shadow: 0 0 0 16px rgba(56, 189, 248, 0), 0 20px 44px rgba(14, 165, 233, 0.58);
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: -40%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.38), transparent 46%);
    transform: translateX(-35%);
    transition: transform 220ms ease;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 42px rgba(14, 165, 233, 0.52);
    filter: saturate(1.08);
  }

  &:not(:disabled):active {
    transform: translateY(1px) scale(0.985);
    transition-duration: 80ms;
  }

  &:not(:disabled):hover::after {
    transform: translateX(12%);
  }

  &[data-speaking='true']:not(:disabled) {
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.35), 0 20px 44px rgba(14, 165, 233, 0.58);
    filter: brightness(1.06);
    animation: onAirRing 1.15s ease-out infinite;
  }

  &:disabled {
    background: linear-gradient(140deg, #334155, #1e293b);
    color: #cbd5e1;
    box-shadow: none;
    cursor: not-allowed;
    animation: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;

    &::after {
      transition: none;
    }
  }
`;
