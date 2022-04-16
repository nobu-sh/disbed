import { FC, useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import SliderButton from "../components/SliderButton"
import { lightThemeState } from "../state"
import './Settings.scss'

const SettingsOverlay: FC = () => {
  const [theme, setTheme] = useRecoilState(lightThemeState)
  const [compact, setCompact] = useState<boolean>(false)
  
  const [expand, setExpand] = useState<boolean>(false)
  const [json, setJson] = useState<boolean>(false)


  const [autoSave, setAutoSave] = useState<boolean>(true)
  const [shareable, setShareable] = useState<boolean>(true)
  const [saveWebhook, setSaveWebhook] = useState<boolean>(false)

  return (
    <div className="SettingsOverlay">
      <div className="title">
        <h3>Settings</h3>
      </div>
      <div className="divider"></div>

      {/* Appearance */}

      <h4 className="section">Appearance</h4>

      <div className="setting sliderbutton">
        <div>
          <h4>Light Theme</h4>
          <p>As a wise fish from Spongebob once stated: <a href="https://www.youtube.com/watch?v=Qn977W9HjWM">"MY EYES!!!"</a>.</p>
        </div>
        <SliderButton state={theme} onChange={setTheme} />
      </div>
      <div className="setting sliderbutton">
        <div>
          <h4>Compact Mode</h4>
          <p>Fits more messages on screen, resembles an og irc.</p>
        </div>
        <SliderButton state={compact} onChange={setCompact} />
      </div>
      <div className="divider"></div>

      {/* Editor */}

      <h4 className="section">Editor</h4>

      <div className="setting sliderbutton">
        <div>
          <h4>Expand All</h4>
          <p>All nested sections will be expanded by default rather than collapsed.</p>
        </div>
        <SliderButton state={expand} onChange={setExpand} />
      </div>
      <div className="setting sliderbutton">
        <div>
          <h4>Mutable JSON</h4>
          <p>Allows editing in JSON editor and will append updates to builder/visualizer.</p>
        </div>
        <SliderButton state={json} onChange={setJson} />
      </div>
      <div className="divider"></div>

      {/* System Functionality */}

      <h4 className="section">System</h4>

      <div className="setting sliderbutton">
        <div>
          <h4>Auto Save</h4>
          <p>Everytime a change is made in the editor, automatically save a backup.</p>
        </div>
        <SliderButton state={autoSave} onChange={setAutoSave} />
      </div>
      <div className="setting sliderbutton">
        <div>
          <h4>Shareable URLs</h4>
          <p>Enables sharing by using base64 to encode your embed into the URL.</p>
        </div>
        <SliderButton state={shareable} onChange={setShareable} />
      </div>
      <div className="setting sliderbutton">
        <div>
          <h4>Save Webhook URL</h4>
          <p>Will save webhook URL if used when creating/sending embed.</p>
          <p><strong>This can be dangerous!</strong></p>
        </div>
        <SliderButton state={saveWebhook} onChange={setSaveWebhook} />
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default SettingsOverlay
