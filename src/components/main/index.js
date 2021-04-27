import React from 'react'
import { Col, Row } from 'react-bootstrap'

import SideBar from '../SideBar'
import Header from '../Header'
import { ParaPar } from '../Pages'
import { Carrinho } from '../Pages'

const Main = ({
}) => (
    <Row noGutters>
        <Col fluid md={2}>
            <SideBar />
        </Col>
        <Col fluid md={10}>
            <Header />
            <Carrinho />
        </Col>
    </Row>
)

export default Main
