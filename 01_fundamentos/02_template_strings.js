function arrayToStringWithWhy(elements) {
  let result;
  let i = 1;
  const size = elements.length;
  for (i; i <= size; i++) {
    result += `${elements[i]}`;
    if (i === elements - 1) {
      result += "y "
    } else {
      result += ", "
    }
  }
  console.log(result);
}

arrayToStringWithWhy(["Banana", "Orange", "Apple", "Mango"])