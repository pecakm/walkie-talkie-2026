import { ButtonProps } from './button.types';
import { Container } from './button.styled';

export default function Button({ className, children, onClick }: ButtonProps) {
  return (
    <Container
      className={className}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
