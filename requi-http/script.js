
 const products = [
    {
    "id": 1,
    "name": "camisa",
    "price": 59.9
    },
    {
      "id": 2,
      "name": "Calça vermelha",
      "price": 90
      },
      {
        "id": 3,
        "name": "Boné aba reta",
        "price": 29.9
        }
]

products.map((product) => {
  console.log(product.id)
  console.log(product.name)
  console.log(product.price)
  return product
})
