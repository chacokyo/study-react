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

// count가 1일 때 버튼 클릭 > 제거 (0 표시 x)

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          }
        } else {
          return product
        }
      })
    )
  }

  function handleDecreaseClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        }
      } else {
        return product
      }
    })
    // 배열중에 삭제할 품목을 찾음 > 전체 - 폼목
    // 배열중에 삭제하지 않을 품목들만 > 전체 = 품목

    nextProducts = nextProducts.filter((product) => product.count > 0)

    setProducts(nextProducts)
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
          <button
            onClick={() => {
              handleDecreaseClick(product.id)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
