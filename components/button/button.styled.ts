import styled from 'styled-components';
import { Button } from '@mui/material';

export const Container = styled(Button)`
  && {
    border-radius: 0.8rem;
    text-transform: none;
    font-weight: 600;
    color: #e2e8f0;
    border: 1px solid rgba(148, 163, 184, 0.45);
    background: rgba(15, 23, 42, 0.5);

    &:hover {
      border-color: rgba(148, 163, 184, 0.75);
      background: rgba(30, 41, 59, 0.7);
    }
  }
`;
