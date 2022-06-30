import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom'


const Product = () => {

  const { id } = useParams(); // <- Esse hook serve para resgatar uma informação, nesse caso a ID.

  const URL = "http://localhost:3000/products/" + id

  const { data: product, loading, error } = useFetch(URL);

  console.log(product);
  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {/*&& se aplica a quando um estado for verdadeiro ele executa algo*/}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$: {product.price}</p>
          <Link to={`/products/${product.id}/info`} >Mais informações</Link>
        </div>

      )}
    </>
  );
};

export default Product;