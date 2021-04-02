import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

const MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'html')
      return new htmlWorker()
    return new editorWorker()
  }
}

const starter_code = `<div class="flex flex-col md:flex-row px-6 py-6 items-center bg-gray-200">
	<h1 class="text-3xl font-black text-black">HTML Class Prefixer</h1>
	<nav class="flex-1 flex justify-end space-x-4">
		<a href="#" class="text-indigo-800">Home</a>
		<a href="#" class="text-green-800">About</a>
		<a href="#" class="text-blue-800">Contact</a>
	</nav>
</div>
<p>
	Let's see an element without any classes.
</p>`

const EditorOptions = {
  language: 'html',
  theme: 'vs-dark',
  lineNumbers: false,
  automaticLayout: true,
  scrollBeyondLastLine: false,
  tabSize: 2,
  tabCompletion: true,
  autoIndent: true,
  autoClosingBrackets: true,
  minimap: {
    enabled: false,
  },
  value: starter_code, 
};

const createEditor = element => {
  return monaco.editor.create(element, EditorOptions)
}

export {
  createEditor,
  MonacoEnvironment,
}
