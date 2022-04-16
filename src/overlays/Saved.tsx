import { FC } from "react"
import ItemWithToolTip from "../components/ItemWithToolTip"
import Edit from "../icons/Edit"
import Trash from "../icons/Trash"
import './Saved.scss'

interface SavedEmbed {
  title: string
  last_edited: Date,
}

const examples: SavedEmbed[] = new Array(15).fill(null).map(() => ({
  title: "Embed Title " + (Math.random() + 1).toString(36).substring(7),
  last_edited: new Date(Date.now() - Math.floor(Math.random() * 15000000000))
}))

const SavedOverlay: FC = () => {

  return (
    <div className="SavedOverlay">
      <div className="title">
        <h3>Saved Embeds</h3>
      </div>
      <div className="embeds">
        {
          examples.sort((a, b) => {
            const aa = a.last_edited.getTime(),
              bb = b.last_edited.getTime()
            if (aa < bb) return 1
            else if (bb < aa) return -1
            return 0
          }).map((item, ind) => (
            <div className="embed" key={ind}>
              <div className="info">
                <ItemWithToolTip alignLeft className="edit" toolTip="Rename Embed">
                  <input
                    type="text"
                    value={item.title}
                    onChange={(c) => {
                      // Link this up with an atom family
                      // So states are not wonky in the future
                      // item.title = c.target.value
                    }}
                    onBlur={(c) => {
                      // if (!c.target.value.length) {
                      //   item.title = 'Unnamed Embed'
                      //   c.target.value = item.title
                      // }
                      // console.log('Saving New Title:', item.title)
                    }}
                  />
                </ItemWithToolTip>
                <p>{item.last_edited.toLocaleString()}</p>
              </div>
              <div className="options">
                <ItemWithToolTip className="edit" toolTip="Edit Embed">
                  <Edit />
                </ItemWithToolTip>
                <ItemWithToolTip className="tresh" toolTip="Delete Embed">
                  <Trash />
                </ItemWithToolTip>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SavedOverlay
