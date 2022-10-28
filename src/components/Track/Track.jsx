import * as S from './style'

const Track = (props) => {
    return (
        <S.Track>
        <S.TrackTitle>
        <S.TrackTitleImage>
        <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div /*className="track__title-text"*/>
          <S.TrackTitleLink href={props.titleLink}>
              {props.titleName}{' '}
              <S.TrackTitleSpan>{props.titleSpan}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
        <S.TrackAuthorLink href={props.authorLink}>
            {props.authorName}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
        <S.TrackAlbumLink href={props.albumLink}>
            {props.albumName}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div /*className="track__time"*/>
        <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.time}</S.TrackTimeText>
        </div>
      </S.Track>
    )
  }
  
  export default Track