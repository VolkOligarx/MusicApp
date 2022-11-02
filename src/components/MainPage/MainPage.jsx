import * as S from './style'
import Centerblock from '../Centerblock/Centerblock'
import Sidebar from '../Sidebar/Sidebar'
import Navigation from '../Navigation/Navigation'

export const SidePlaylists = [
    {
      id: 1,
      name: 'Плейлист дня',
      img: 'img/playlist01.png',
      tracks: {},
    },
    {
      id: 2,
      name: '100 танцевальных хитов',
      img: 'img/playlist02.png',
      tracks: {},
    },
    {
      id: 3,
      name: 'Инди-заряд',
      img: 'img/playlist03.png',
      tracks: {},
    },
  ]

const MainPage = () => {
  return (
    <S.Main>
      <S.Nav>
        <Navigation />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name="Треки" />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={SidePlaylists} />
      </S.Sidebar>
    </S.Main>
  )
}

export default MainPage