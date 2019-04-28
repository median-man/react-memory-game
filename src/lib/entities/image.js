export default function makeImage({ name, src, alt }) {
  if (!name) {
    throw missingRequiredPropertyError('name')
  }
  if (!src) {
    throw missingRequiredPropertyError('src')
  }
  if (!alt) {
    throw missingRequiredPropertyError('alt')
  }

  let isClicked = false

  return Object.freeze({
    name: () => name,
    src: () => src,
    alt: () => alt,
    isClicked: () => isClicked,
    click: () => {
      isClicked = true
    }
  })
}

function missingRequiredPropertyError(propertyName) {
  return new Error(`Must have '${propertyName}'.`)
}
