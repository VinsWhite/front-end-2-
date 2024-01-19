import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchRowComponent from "../components/SearchRowComponent";
import { searchJob } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const [query, setQuery] = useState(""); //inizializziamo lo stato di query
  const dispatch = useDispatch(); //il dispatch è usato per passare l'oggetto all'action 
  const { jobs } = useSelector((state) => state); //inizializziamo lo stato di jobs


  const handleChange = e => { 
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(searchJob(query)) //dispatch di un azione per ricercare i lavori
  };

  return (
    <Container>
      <SearchRowComponent jobs={jobs} query={query} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </Container>
  );
};

export default HomePage;
