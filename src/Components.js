import React, { Component } from 'react'
import { Col, Image, Table} from 'react-bootstrap'
import _ from "lodash"

const cardView = (data, key) => {
    return(
        <Col lg={4} key={key} className="card-box">
            <Col className="card-view" lg={12}>
                <Col lg={5} className="card-thumb"><Image src={_.get(data, "displayImage") || "https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640"} responsive /></Col>
                <Col lg={7} className="card-info">
                    <Col lg={12} className="card-name">{_.get(data, "fullname")}</Col>
                    <div className="clearfix" />
                    <br />
                    <Col lg={12} className="card-bio">{_.get(data, "bio")}</Col>
                </Col>
            </Col>
        </Col>
    )
}
const tableHeader = (data, key) => {
    // console.log("key", key)
    // console.log("data", data)
    return(
       <td key={key}>{_.get(data, "columnDisplayName")}</td>
    )
}
const tableData = (data, key) => {
    return(
        <tr>
        <td>{_.get(data, "productName")}</td>
        <td>{_.get(data, "stockCount")}</td>
        <td>{_.get(data, "manufacturer")}</td>
        <td>{_.get(data, "description")}</td>
        </tr>
    )
}

class Components extends Component {
  render() {
    const {params} = this.props.match
    const module = require("./JSON/config/" + params.module)
    const data = require("./JSON/data/" + params.module)
    const {columndFields} = module
    // import data from imp
    // console.log("module", module)
    // console.log("data", data)
    return (
        <Col lg={10}>
        {
            module && module.type === "card" &&
            data.map(cardView)
        }
        {
            module && module.type === "table" &&
            <Table striped bordered condensed hover>
            <thead>
                <tr>
                {columndFields.map(tableHeader)}
                </tr>
            </thead>
            <tbody>
                {data.map(tableData)}
            </tbody>
            </Table>
        }
        </Col>
    );
  }
}

export default Components;
