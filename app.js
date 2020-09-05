// remove -
// removeChild - requires a parent, need to select child

const result = document.querySelector('#result');
// result.remove(); removes element with the id result
const heading = result.querySelector('h1');
result.removeChild(heading); // removes second heading
console.log(heading);