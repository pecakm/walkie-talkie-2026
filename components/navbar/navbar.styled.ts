import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  width: min(42rem, calc(100% - 2rem));
  margin: 0 auto;
  padding: 0.78rem 1rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 1rem;
  background: linear-gradient(130deg, rgba(15, 23, 42, 0.82), rgba(30, 41, 59, 0.68));
  color: #e2e8f0;
  font-size: clamp(1.05rem, 0.6vw + 0.92rem, 1.2rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
  box-shadow: 0 14px 34px rgba(2, 6, 23, 0.34);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      radial-gradient(circle at 10% 14%, rgba(34, 211, 238, 0.18), transparent 26%),
      radial-gradient(circle at 90% 16%, rgba(99, 102, 241, 0.14), transparent 28%);
  }
`;
