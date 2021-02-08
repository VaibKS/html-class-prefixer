import 'alpinejs'
import './assets/tailwind.css'
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'html')
      return new htmlWorker()
    return new editorWorker()
  }
}

self.monaco = monaco
