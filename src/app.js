import './assets/tailwind.css'
import 'alpinejs'
import { prefixHTML } from './prefixer.js'
import { MonacoEnvironment, createEditor } from './editor.js'

const app = () => {
  return {
    editor: null,
    viewer: null,
    prefix: 'tw-',
    init() {
      this.editor = createEditor(this.$refs.editor)
      this.viewer = createEditor(this.$refs.viewer)
      this.prefixer()
    },
    prefixer() {
      this.viewer.getModel().setValue('Processing...')
      const html = this.editor.getModel().getValue()
      this.viewer.getModel().setValue(prefixHTML(html, this.prefix))
    },

  }
}

self.MonacoEnvironment = MonacoEnvironment
self.app = app
