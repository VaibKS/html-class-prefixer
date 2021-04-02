const prefixHTML = (html, prefix) => {
  let DOM = new DOMParser().parseFromString(html, 'text/html')
  prefixer(DOM.body.childNodes, prefix)
  return DOM.body.innerHTML
}

const prefixer = (nodes, prefix) => {
  nodes.forEach(node => {

    if (node.nodeType == Node.TEXT_NODE || node.classList == undefined || node.classList.length == 0)
      return

    node.className = node.className.trim().split(' ')
      .filter(c => {
        return (c.trim().length != 0)
      })
      .map(c => {
        c = c.trim()
        const match = c.match(/(?<variant>.*):(?<className>.*)/)
        if (match) {
          const { variant, className } = match.groups
          c = `${variant}:${prefix}${className}`
        }
        else
          c = prefix + c
        return c
      })
      .join(' ')

    prefixer(node.childNodes, prefix)
  })
  return nodes
}

export {
  prefixHTML
}
