import { FC } from "react";
import { useRecoilState } from "recoil";
import { overlays } from "../overlays";
import { activeOverlayState } from "../state";

import './Overlays.scss'


const Overlays: FC = () => {
  const [overlay, setOverlay] = useRecoilState(activeOverlayState)

  return (
    <div
      id="OVERLAYS_DIV"
      className={`Overlays ${overlay ? 'active' : ''}`}
      onClick={(e) => {
        (e.target as HTMLDivElement).id === 'OVERLAYS_DIV'
          ? setOverlay(undefined)
          : ''
      }}
    >
      <div className="container">
        {
          Object.entries(overlays).map(([key, Component], i) => (
            <div className={`contents ${ overlay === key ? 'active' : '' }`} key={i}>
              <Component />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Overlays
