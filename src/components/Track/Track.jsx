const Track = (props) => {
    return (
        <div className="playlist__track track">
        <div className="track__title">
        <div className="track__title-image">
        <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
          <a className="track__title-link" href={props.titleLink}>
              {props.titleName}{' '}
              <span className="track__title-span">{props.titleSpan}</span>
            </a>
          </div>
        </div>
        <div className="track__author">
        <a className="track__author-link" href={props.authorLink}>
            {props.authorName}
          </a>
        </div>
        <div className="track__album">
        <a className="track__album-link" href={props.albumLink}>
            {props.albumName}
          </a>
        </div>
        <div className="track__time">
        <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    )
  }
  
  export default Track