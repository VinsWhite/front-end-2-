import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Job from "./Job";

export default function JobsRowComponent({jobs, params}) {
  return (
    <>
        <Row>
            <Col className="my-3">
            <h1 className="display-4">Job posting for: {params.company}</h1>
            {jobs.map(jobData => (
                <Job key={jobData._id} data={jobData} />
            ))}
            </Col>
        </Row>
    </>
  )
}
