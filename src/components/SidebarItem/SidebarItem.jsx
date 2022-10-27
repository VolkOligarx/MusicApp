const SidebarItem = (props) => {
    return (
        <div className="sidebar__item">
        <a className="sidebar__link" href="http://">
          <img
            className="sidebar__img"
            src={props.img}
            alt="day's playlist"
          />
        </a>
      </div>
    )
  }
  
  export default SidebarItem

  
