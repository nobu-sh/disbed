import { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import Database from "../icons/Database";
import Layout from "../icons/Layout";
import Settings from "../icons/Settings";
import { activeOverlayState } from "../state";
import "./Navbar.scss"

interface NavbarItemProps {
  className?: string
  toolTip?: string
  alignLeft?: boolean,
  italic?: boolean,
  onClick?: () => void,
  disableToolTip?: boolean
}

const NavbarItem: FC<NavbarItemProps> = (props) => {
  return (
    <div className={`navbaritem ${props.className}`} onClick={props.onClick}>
      { props.children }
      <div className={`tooltip ${props.alignLeft ? 'left' : ''} ${props.disableToolTip ? 'disabled' : ''}`}>
        <div className="content">
          <div className="trig"></div>
          {
            props.italic
              ? <em><p>{ props.toolTip || 'Empty Tooltip' }</p></em>
              : <p>{ props.toolTip || 'Empty Tooltip' }</p>
          }
        </div>
      </div>
    </div>
  )
}

const Navbar: FC = () => {
  const setOverlay = useSetRecoilState(activeOverlayState)

  return (
    <div className="Navbar">
      {/* Temp Icon */}
      <Layout />
      {/* Title */}
      <h3>Disbed</h3>

      <div className="divider"></div>

      {/* AKA mockup summary */}
      <div className="aka">AKA</div>
      <NavbarItem 
        alignLeft 
        italic 
        toolTip="Hey, you're cool <3"
      >
        <p className="summary">⚡ Powerful Embed Visualizer</p>
      </NavbarItem>

      {/* Right Content On Navbar */}
      <div className="rightContent">

        {/* Save Embeds */}
        <NavbarItem
          toolTip="Saved Embeds"
          onClick={() => setOverlay('saved_embeds')}
        >
          <Database />
        </NavbarItem>

        {/* Settings Context */}
        <NavbarItem
          toolTip="Settings"
          onClick={() => setOverlay('settings')}
        >
          <Settings />
        </NavbarItem>
      </div>

    </div>
  )
}

export default Navbar
