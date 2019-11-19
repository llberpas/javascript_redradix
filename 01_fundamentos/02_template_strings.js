function arrayToStringWithWhy(elements) {
  let result = "";
  const size = elements.length - 1;
  for (let i = 0; i <= size; i++) {
    result += `${elements[i]}`;
    if (i === size - 1) {
      result += " y "
    } else if (i < size - 1) {
      result += ", "
    }
  }
  console.log(result);
}

arrayToStringWithWhy(["Planano", "Naranja", "Manzana", "Mango"])