import {
  atom
} from 'recoil'

// Handle Initial Set Of Theme
const currentValue = localStorage.getItem('lightTheme') === 'true'
  ? true 
  : false
// If light theme enable it in html
if (currentValue) document.body.parentElement?.classList.add('light')

export const lightThemeState = atom<boolean>({
  key: 'lightTheme',
  default: currentValue,
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem(
          'lightTheme',
          newValue === true ? 'true' : 'false'
        )

        if (newValue) document.body.parentElement?.classList.add('light')
        else document.body.parentElement?.classList.remove('light')
      })
    }
  ]
})

export const activeOverlayState = atom<string | undefined>({
  key: 'activeOverlay',
  default: 'saved_embeds'
})
