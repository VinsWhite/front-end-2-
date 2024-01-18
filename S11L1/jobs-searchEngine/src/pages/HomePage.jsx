import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchRowComponent from "../components/SearchRowComponent";
import { searchJob } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const [query, setQuery] = useState(""); //inizializziamo lo stato
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state);


  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(searchJob(query))
  };

  return (
    <Container>
      <SearchRowComponent jobs={jobs} query={query} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </Container>
  );
};

export default HomePage;
