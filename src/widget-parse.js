const xmlParse = require('./xml-parser')
const {Widget} = require('./widget')

export function widgetParse(wxml, style) {
  const {root: xom} = xmlParse(wxml)

  const widget = new Widget(xom, style)
  return widget.init()
}