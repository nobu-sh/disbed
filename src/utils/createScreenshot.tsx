import html2canvas from 'html2canvas'

/**
 * Creates screenshot of given element and children.
 * Returns as base64.
 */
export const screenshot = async (elm: HTMLElement): Promise<string> => {
  return new Promise((r, j) => {
    html2canvas(elm, { backgroundColor: '#0000000' })
      .then((canvas) => {
        return r(canvas.toDataURL('image/webp'))
      })
      .catch(j)
  })
}