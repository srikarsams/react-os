import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5em;
  text-align: center;
`;

export default function Home() {
  return (
    <div>
      <Title>Good day to learn nextjs</Title>
    </div>
  );
}
