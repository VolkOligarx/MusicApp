import * as S from '../components/MainPage/style'
import Navigation from '../components/Navigation/Navigation'
import Centerblock from '../components/Centerblock/Centerblock'
import Sidebar from '../components/Sidebar/Sidebar'
import { SidePlaylists } from '../components/MainPage/MainPage'
import { useParams } from 'react-router-dom'

const Playlists = () => {
  const params = useParams()

  const playlist = SidePlaylists.find(
    (playlist) => playlist.id === Number(params.id)
  )

  return (
    <S.Main>
      <S.Nav>
        <Navigation />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name={playlist.name} />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={SidePlaylists} />
      </S.Sidebar>
    </S.Main>
  )
}

export default Playlists