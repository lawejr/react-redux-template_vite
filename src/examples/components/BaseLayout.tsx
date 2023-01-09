import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  selectCount,
  selectCountStatus,
} from '~src/examples/domains/globalCounterSlice';
import { urls } from '~src/router/urls';
import { useAppSelector } from '~src/hooks';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  border: 1px solid #3f3f3f;
  margin-right: 34px;
`;

const CounterWrapper = styled.header`
  border: 1px dashed #7a1e1e;
  margin-bottom: 30px;
`;

export function BaseLayout() {
  const count = useAppSelector(selectCount);
  const globalCountStatus = useAppSelector(selectCountStatus);

  return (
    <>
      <CounterWrapper>
        <p>Global Count {count}</p>
        <p>Global status {globalCountStatus}</p>
      </CounterWrapper>
      <Wrapper>
        <Sidebar>
          <h2>Sidebar</h2>
          <NavLink to={urls.STATES_EXAMPLE}>State example</NavLink>
          <br />
          <NavLink to={urls.ROOT}>Posts list</NavLink>
        </Sidebar>
        <div>
          <header>
            <h2>Content</h2>
          </header>
          <Outlet />
        </div>
      </Wrapper>
    </>
  );
}
