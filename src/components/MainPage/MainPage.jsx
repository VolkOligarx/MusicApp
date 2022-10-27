import Centerblock from '../Centerblock/Centerblock'
import Sidebar from '../Sidebar/Sidebar'
import Navigation from '../Navigation/Navigation'

export const PLAYLISTS = [
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
    <main className="main">
      <nav className="main__nav nav">
        <Navigation />
      </nav>
      <div className="main__centerblock centerblock">
        <Centerblock name="Треки" />
      </div>
      <div className="main__sidebar sidebar">
        <Sidebar playlists={PLAYLISTS} />
      </div>
    </main>
  )
}

export default MainPage