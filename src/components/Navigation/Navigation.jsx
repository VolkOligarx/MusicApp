import Menu from "../Menu/Menu";
import { useState } from "react"

const Navigation = () => {

    const [visible, setVisible] = useState(false)

    const handleClick = () => setVisible(!visible)


return (
<nav className="main__nav nav">
  <div className="nav__logo logo">
    <img className="logo__image" src="img/logo.png" alt="logo" />
  </div>
  <div onClick={handleClick} className="nav__burger burger">
    <span className="burger__line" />
    <span className="burger__line" />
    <span className="burger__line" />
  </div>
  {visible && <Menu />}
</nav>
)
}

export default Navigation