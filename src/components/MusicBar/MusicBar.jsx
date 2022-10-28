import * as S from './style'
import Player from '../Player/Player'

const MusicMusicBar = () => {
  return (
    <S.MusicBar>
      <S.MusicBarContent>
      <S.MusicBarPlayerProgress/>
      <S.MusicBarPlayerBlock>
      <S.MusicBarPlayer>
          <Player/>
        </S.MusicBarPlayer>
        <S.MusicBarVolumeBlock>
        <S.VolumeContent>
            <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
            </S.VolumeProgress>
            </S.VolumeContent>
          </S.MusicBarVolumeBlock>
        </S.MusicBarPlayerBlock>
      </S.MusicBarContent>
    </S.MusicBar>
  )
}

export default MusicMusicBar