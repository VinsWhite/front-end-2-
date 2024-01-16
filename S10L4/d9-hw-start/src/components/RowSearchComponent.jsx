//Stavo ancora sistemando le pagine, più tardi continuo

import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function RowSearchComponent({ jobs, query}) {

    const handleChange = e => {
        dispatch({ type: 'SET_QUERY', payload: e.target.value });
    };

  return (
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map(jobData => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
  )
}
