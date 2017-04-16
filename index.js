'use strict'

const component = require('microcomponent')
const html = require('bel')

module.exports = render => component({ pure: true })
    .on('render', () => html(render.call(this)))
