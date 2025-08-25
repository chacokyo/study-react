export function getImageUrl({ baseUrl, value }) {
  return baseUrl + value.imageId + value.imageSize + '.jpg'
}
