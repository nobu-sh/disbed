import { FC, useEffect, useRef, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import SliderButton from "../components/SliderButton"
import { lightThemeState } from "../state"
import { screenshot } from "../utils/createScreenshot"

import './Home.scss'

const Home: FC = () => {
  // const [theme, setTheme] = useRecoilState(lightThemeState)
  // const [checked, setChecked] = useState<boolean>(theme)

  // useEffect(() => {
  //   setTheme(checked)
  // }, [checked])

  // const div = useRef<HTMLDivElement>(null)

  // function screenshit() {
  //   screenshot(document.body.getElementsByClassName('Home')[0] as HTMLElement)
  //     .then((r) => {
  //       const img = document.createElement('img')
  //       img.src = r
  //       div.current?.appendChild(img)
  //     })
  //}

  return (
    <div className="Home">
      {/* <p onClick={screenshit}>SCREENSHIT PAGE</p> */}
      {/* <SliderButton state={checked} onChange={setChecked} /> */}
    </div>
  )
}

export default Home
