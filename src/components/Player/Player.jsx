import * as S from './style'
import TrackPlay from '../TrackPlay/TrackPlay'
import { Loading } from '../Playlist/Playlist'

const Player = (props) => {
  const isLoading = Loading()

  return (
    <S.Player>
      <S.PlayerControls>
      <S.PlayerButtonPrev>
      <S.PlayerButtonPrevSvg alt="prev">
            <use xlinkHref="img/icon/prev.svg#icon-prev"></use>
          </S.PlayerButtonPrevSvg>
        </S.PlayerButtonPrev>
        <S.PlayerButtonPlay>
        <S.PlayerButtonPlaySvg alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </S.PlayerButtonPlaySvg>
        </S.PlayerButtonPlay>
        <S.PlayerButtonNext>
        <S.PlayerButtonNextSvg alt="next">
            <use xlinkHref="./img/icon/next.svg#icon-next"></use>
          </S.PlayerButtonNextSvg>
        </S.PlayerButtonNext>
        <S.PlayerButtonRepeat>
        <S.PlayerButtonRepeatSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerButtonRepeatSvg>
        </S.PlayerButtonRepeat>
        <S.PlayerButtonShuffle>
        <S.PlayerButtonShuffleSvg alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </S.PlayerButtonShuffleSvg>
        </S.PlayerButtonShuffle>
      </S.PlayerControls>
      {isLoading ? (
        <S.SkeletonPlayer>
        <S.SkeletonPlayerContain>
          <svg
            id="player"
            width="122"
            height="52"
            viewBox="0 0 122 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.490723" width="51" height="51" fill="#313131" />
            <rect x="63" y="29.4907" width="59" height="15" fill="#313131" />
            <rect x="63" y="7.49072" width="59" height="15" fill="#313131" />
          </svg>
        </S.SkeletonPlayerContain>
  
        <S.SkeletonLikeDislike>
        <S.BtnIcon>
        <S.SkeletonLikeSvg alt="like">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.SkeletonLikeSvg>
          </S.BtnIcon>
          <S.BtnIcon>
          <S.SkeletonDislikeSvg alt="dislike">
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            </S.SkeletonDislikeSvg>
          </S.BtnIcon>
        </S.SkeletonLikeDislike>
      </S.SkeletonPlayer>
      ) : (
        <TrackPlay name="Ты та..." author="Баста" />
      )}
    </S.Player>
  )
}

export default Player