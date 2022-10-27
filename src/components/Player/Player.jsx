import TrackPlay from '../TrackPlay/TrackPlay'
import { Loading } from '../Playlist/Playlist'

const Player = (props) => {
  const isLoading = Loading()

  return (
    <div className="bar__player player">
      <div className="player__controls">
      <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
            <use xlinkHref="img/icon/prev.svg#icon-prev"></use>
          </svg>
        </div>
        <div className="player__btn-play _btn">
        <svg className="player__btn-play-svg" alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </svg>
        </div>
        <div className="player__btn-next">
        <svg className="player__btn-next-svg" alt="next">
            <use xlinkHref="./img/icon/next.svg#icon-next"></use>
          </svg>
        </div>
        <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>
      {isLoading ? (
        <div className="player__track-play track-play">
        <div className="track-play__contain">
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
        </div>
  
        <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
        <svg className="track-play__like-svg" alt="like">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
          </div>
          <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            </svg>
          </div>
        </div>
      </div>
      ) : (
        <TrackPlay name="Ты та..." author="Баста" />
      )}
    </div>
  )
}

export default Player