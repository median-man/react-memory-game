function getShuffledArray(arrayToShuffle) {
  const result = arrayToShuffle;
  let randomIndex;
  let element;
  let index;
  for (index = result.length - 1; index > 0; index -= 1) {
    randomIndex = Math.floor(Math.random() * (index + 1));
    element = result[index];
    result[index] = result[randomIndex];
    result[randomIndex] = element;
  }
  return result;
}
export default getShuffledArray;
