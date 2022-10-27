import MainPage from '../components/MainPage/MainPage'
import MusicBar from '../components/MusicBar/MusicBar'

export const MusicPage = () => {
  return (
    <div className="main-page">
      <MainPage />
      <MusicBar />
      <footer className="footer"></footer>
    </div>
  )
}