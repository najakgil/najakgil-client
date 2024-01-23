import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  display: 'flex';
  justify-content: 'center';
  width: '100%';
  z-index: 0;
`;

export const Container = styled.div`
  width: 100%;
  min-width: 390px;
  max-width: 450px;
  height: 45px;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`