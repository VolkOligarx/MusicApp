import styled from 'styled-components'

export const CenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4E4E4E;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CenterblockH2 = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const CenterblockContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #FFFFFF;
  fill: transparent;
`

export const SearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  &::placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #FFFFFF;
  border-radius: 60px;
  padding: 6px 20px;
  cursor: pointer;
  color: #FFFFFF;
  margin-right: 10px;
  &:hover {
    border-color: violet;
    color: violet;
  }
`

export const FilterSelect = styled.div`
margin-top: 10px;
min-width: 248px;
background: #313131;
border-radius: 12px;
padding: 34px;
position: fixed;
`

export const FilterSelectIcon = styled.div`
  max-height: 237px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
  }
`
export const FilterSelectIconChoose = styled.div`
    &:hover {
        color: #B672FF;
        text-decoration: underline;    
    }
`

export const FilterYear = styled.div`
flex-direction: row;
overflow: hidden;
& input[type='radio'] {
    display: none;
}
`

export const FilterYearLabel = styled.input`
display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-right: 10px;
    line-height: 18px;
    user-select: none;
    &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: url('./img/icon/radio_disable.png') 0 0 no-repeat;
    &:hover:before {
        filter: brightness(80%);
    }
    }
    & input[type='radio']:checked + label:before {
    background: url('./img/icon/radio_active.png') 0 0 no-repeat;
    }
`

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const CenterblockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`
