import styled from 'styled-components'

export const Div = styled.div`
  height: 33vh;
  min-width: 22vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 12px;
  & h2 {
    font-size: 6em;
  }
  & * {
    font-size: 24px;
  }
`

export const Input = styled.input`
  padding-bottom: 10px;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  border: none;
  border-bottom: 1px solid #E1E1E1
`

export const Img = styled.img`
  margin-left: 113px;
  margin-right: 113px;
  padding-bottom: 42px;
`

export const Form = styled.form`
  margin-left: 43px;
  margin-right: 43px;
  display: flex;
  flex-direction: column;
  gap: 38px;
`
export const Button = styled.button`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #FFFFFF;
  margin-bottom: 20px;
  margin-top: 60px;
  background: #580EA2;
  border-radius: 6px;
  height: 3.63vh;
`