import * as S from './style'
import SidebarItem from '../SidebarItem/SidebarItem'
import { Loading } from '../Playlist/Playlist'
import SidebarSkeleton from '../SidebarSkeleton/SidebarSkeleton'

const Sidebar = ({ playlists }) => {
  const isLoading = Loading()

  return (
    <div /*className="sidebar"*/>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar></S.SidebarAvatar>
      </S.SidebarPersonal>
    <S.SidebarBlock>
        <S.SidebarList>
          {playlists.map((playlist) =>
            isLoading ? (
              <SidebarSkeleton key={playlist.id} />
            ) : (
              <SidebarItem
                key={playlist.id}
                id={playlist.id}
                img={playlist.img}
              />
            )
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </div>
  )
}

export default Sidebar