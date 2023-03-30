import styled from 'styled-components';
import { Dashboard } from './Dashboard';

export default function Home() {
  return (
    <Wrapper>
      <Dashboard />
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width:100vw;
  background-color: ;
  color: ;
  display: grid;
  place-items: center;
`;
