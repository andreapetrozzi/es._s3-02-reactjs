import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../redux/actions";


const MainSearch = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const jobs = useSelector((state) => state.job.results);
  const jobsLoading = useSelector((state) => state.job.loading);
  const jobsError = useSelector((state) => state.job.error);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate("/favourites")}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsLoading && (
            <Spinner animation="border" variant="info" className="mt-3" />
          )}
          {jobsError && (
            <Alert variant="danger">Error fetching the results</Alert>
          )}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
