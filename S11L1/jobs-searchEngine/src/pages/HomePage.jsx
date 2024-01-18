import { useState } from "react";
import { Container } from "react-bootstrap";
import { endpointSearch } from "../endpoint/endpoint";
import axios from 'axios'
import SearchRowComponent from "../components/SearchRowComponent";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    //chiamata fetch 'classica'
    /* try {
        const response = await fetch(endpointSearch + query + "&limit=20");
        if (response.ok) {
          const { data } = await response.json();
          setJobs(data);
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      } */

    //chiamata fetch più performante con axios
    try {
      const response = await axios.get(endpointSearch + query + "&limit=20");
      if (response.status === 200) {
        const { data } = response.data;
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <SearchRowComponent jobs={jobs} query={query} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </Container>
  );
};

export default HomePage;
