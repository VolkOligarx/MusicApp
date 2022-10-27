import SidebarItem from '../SidebarItem/SidebarItem'
import { Loading } from '../Playlist/Playlist'
import SidebarSkeleton from '../SidebarSkeleton/SidebarSkeleton'

const Sidebar = ({ playlists }) => {
  const isLoading = Loading()

  return (
    <div className="sidebar">
      <div className="sidebar__personal">
    <p className="sidebar__personal-name">Sergey.Ivanov</p>
    <div className="sidebar__avatar"></div>
    </div>
    <div className="sidebar__block">
        <div className="sidebar__list">
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
        </div>
      </div>
    </div>
  )
}

export default Sidebar