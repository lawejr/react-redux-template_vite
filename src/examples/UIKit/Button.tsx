import styled from 'styled-components';

const Btn = styled.button`
  background: #fff333;

  color: #333fff;

  &:hover {
    background: purple;
  }
`;

export function Button({ children, ...props }: any) {
  return (
    <Btn type="button" {...props}>
      {children}
    </Btn>
  );
}
