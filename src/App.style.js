import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
  color: ${(props) => props.theme.basicTextColor};
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`
export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
`