function createDomElement(tag, attributesObject, ...classList) {
  const element = document.createElement(tag);
  if (classList[0]) element.classList.add(classList);
  Object.entries(attributesObject).forEach(([key, value]) => {
    element[key] = value;
  });
  return element;
}

export default createDomElement;
