import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
]
// 버튼 클릭 시 상품 고유 아이디 전달.
// 고유 아이디와 일치하는 객체의 count값 +1 증가
export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  // 버튼
  function handleIncreaseClick(productId) {
    const updateProduct = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1,
        }
      } else {
        return product
      }
    })
    setProducts(updateProduct)
  }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id)
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  )
}
