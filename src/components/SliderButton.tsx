import { FC } from "react";
import './SliderButton.scss'

interface SliderButtonProps {
  state: boolean,
  onChange: (data: boolean) => void
}

const SliderButton: FC<SliderButtonProps> = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={props.state} onChange={(e) => props.onChange(e.target.checked)} />
      <span className="slider round"></span>
    </label>
  )
}

export default SliderButton
