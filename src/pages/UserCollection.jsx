import * as S from '../components/MainPage/style'
import Navigation from '../components/Navigation/Navigation'
import Centerblock from '../components/Centerblock/Centerblock'
import Sidebar from '../components/Sidebar/Sidebar'
import { SidePlaylists } from '../components/MainPage/MainPage'

const UserCollection = () => {
  return (
    <S.Main>
      <S.Nav>
        <Navigation />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name="Мои треки" />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={SidePlaylists} />
      </S.Sidebar>
    </S.Main>
  )
}

export default UserCollection