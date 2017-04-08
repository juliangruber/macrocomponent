'use strict'

const Component = require('nanocomponent')
const html = require('bel')
const morph = require('nanomorph')

module.exports = (props, render) => {
  const c = new Component()
  c._update = function (opts) {
    for (var i = 0; i < props.length; i++) {
      if (opts[props[i]] !== this[props[i]]) return false
    }
    return true
  }
  c._render = function (state) {
    for (var i = 0; i < props.length; i++) {
      this[props[i]] = state[props[i]]
    }
    const el = html(render(state))
    if (this._element) morph(this._element, el)
    else this._element = el
    return this._element
  }
  return c
}
