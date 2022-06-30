import { useNavigate } from "react-router-dom"; 

import { useState } from "react";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault() => Utilizado para não recarregar a página ao fazer a busca

    navigate("/search?q=" + query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;