export function isElement (el) {
  return el && el.nodeType === Node.ELEMENT_NODE
}

export function removeFromDom (el) {
  isElement(el) && isElement(el.parentNode) && el.parentNode.removeChild(el)
}
