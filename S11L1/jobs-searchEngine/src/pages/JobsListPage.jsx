import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { endpointCompany } from "../endpoint/endpoint";
import JobsRowComponent from "../components/JobsRowComponent";
import axios from "axios";

const JobsListPage = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //chiamata fetch con axios
  const getJobs = async () => {
    try {
      const response = await axios.get(endpointCompany + params.company);
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
        <JobsRowComponent jobs={jobs} params={params}/>
    </Container>
  );
};

export default JobsListPage;
