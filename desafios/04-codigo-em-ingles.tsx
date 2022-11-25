// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ListProduto() {
  const [filteredProdutos, setFilteredProdutos] = useState<Product[]>([])

  function searchProduto(search: string) {
    const filtrado = productList.filter(product => product.title.includes(search))

    setFilteredProdutos(filtrado)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduto(e.target.value)} />

      {filteredProdutos.map(produto => (
        <div>
          <p>{produto.title}</p>
          <p>{produto.price}</p>
        </div>
      ))}
    </div>
  )
}


