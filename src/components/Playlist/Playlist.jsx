import * as S from './style'
import Track from '../Track/Track'
import TrackSkeleton from '../TrackSkeleton/TrackSkeleton'
import { useState, useEffect } from 'react'
import axios from 'axios'

export let dataTracks
export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)

      return () => clearTimeout(timer)
    }, 5000)
  })

  return isLoading
}
let track = []
const Playlist = (props) => {
    const isLoading = Loading()
    switch (props.dataPick) {
      case "data":
        axios.get('https://painassasin.online/catalog/track/all/').then(res => {
          track = res.data
          dataTracks = track
          console.log(dataTracks);
      });    
        break;
    
        case "playlist":
          console.log(props.playlistsNumber);

          axios.get('https://painassasin.online/catalog/selection/').then(res => {
            switch (props.playlistsNumber) {
              case 1:
                track = res.data[0].items
                break;
              case 2:
                track = res.data[1].items
                break;
              case 3:
                track = res.data[2].items
                break;
      
              default:
                break;
            }
          })
          break;
      default:
        break;
    }
    return (
      <S.Playlist>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
                titleLink={track[0].track_file}
                titleName={track[0].name}
                authorLink="http://"
                authorName={track[0].author}
                albumLink="http://"
                albumName={track[0].album}
                time={(track[0].duration_in_seconds/60).toFixed(2)}
              />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[1].track_file}
              titleName={track[1].name}
              authorLink="http://"
              authorName={track[1].author}
              albumLink="http://"
              albumName={track[1].album}
              time={(track[1].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[2].track_file}
              titleName={track[2].name}
              authorLink="http://"
              authorName={track[2].author}
              albumLink="http://"
              albumName={track[2].album}
              time={(track[2].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[3].track_file}
              titleName={track[3].name}
              authorLink="http://"
              authorName={track[3].author}
              albumLink="http://"
              albumName={track[3].album}
              time={(track[3].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[4].track_file}
              titleName={track[4].name}
              authorLink="http://"
              authorName={track[4].author}
              albumLink="http://"
              albumName={track[4].album}
              time={(track[4].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[5].track_file}
              titleName={track[5].name}
              authorLink="http://"
              authorName={track[5].author}
              albumLink="http://"
              albumName={track[5].album}
              time={(track[5].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[6].track_file}
              titleName={track[6].name}
              authorLink="http://"
              authorName={track[6].author}
              albumLink="http://"
              albumName={track[6].album}
              time={(track[6].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[7].track_file}
              titleName={track[7].name}
              authorLink="http://"
              authorName={track[7].author}
              albumLink="http://"
              albumName={track[7].album}
              time={(track[7].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : (
              <Track
              titleLink={track[8].track_file}
              titleName={track[8].name}
              authorLink="http://"
              authorName={track[8].author}
              albumLink="http://"
              albumName={track[8].album}
              time={(track[8].duration_in_seconds/60).toFixed(2)}
            />
            )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
  
        {track[9] ? (        
        <S.PlaylistItem>
          <S.PlaylistTrack>
            {isLoading ? (
              <TrackSkeleton />
            ) : ( 
                <Track
                titleLink={track[9].track_file}
                titleName={track[9].name}
                authorLink="http://"
                authorName={track[9].author}
                albumLink="http://"
                albumName={track[9].album}
                time={(track[9].duration_in_seconds/60).toFixed(2)}
              />
              )}
          </S.PlaylistTrack>
        </S.PlaylistItem>
        ) : ''}
      </S.Playlist>
    )
  }
  
  export default Playlist