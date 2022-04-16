import { FC } from "react";
import './ItemWithToolTip.scss'

interface ItemWithToolTipProps {
  className?: string
  toolTip?: string
  alignLeft?: boolean,
  italic?: boolean,
  onClick?: () => void,
  disableToolTip?: boolean
}

const ItemWithToolTip: FC<ItemWithToolTipProps> = (props) => {
  return (
    <div className={`ItemWithToolTip ${props.className}`} onClick={props.onClick}>
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

export default ItemWithToolTip
