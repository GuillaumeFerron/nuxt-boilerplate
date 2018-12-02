import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  config.mode = 'universal' // Isomorphic application
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

// Example of testing via DOM checking
test('Route / exits and render HTML with CSS applied', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const seoTitle = window.document.querySelector('.seo-title')
  t.not(seoTitle, null)

  // Content check
  t.is(seoTitle.textContent, window.document.title)

  // CSS check
  t.is(window.getComputedStyle(seoTitle).opacity, 0)
  t.is(window.getComputedStyle(seoTitle).zIndex, '-99999999')
  t.is(window.getComputedStyle(seoTitle).top, '-99999999px')
  t.is(window.getComputedStyle(seoTitle).left, '-99999999px')
  t.is(window.getComputedStyle(seoTitle).position, 'absolute')
  t.is(window.getComputedStyle(seoTitle).maxHeight, '0')
  t.is(window.getComputedStyle(seoTitle).maxWidth, '0')
})

// Close the Nuxt server
test.after('Closing server', t => {
  nuxt.close()
})
