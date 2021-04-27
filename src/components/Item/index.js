import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import React from 'react';

const Itens = styled.div`
    text-align: center;
    padding: 5px;
    font-weight: bold;
    background: #ffffff;
    &.darker {
        background: #e9eef9;
    }

    .row{
        display: flex;
        align-items: center;
    }
`

const Lente = styled.img`
    width:90px;
    height:90px;
`

const IconEdit = styled.a`
    display:block;
    width:20px;
    height:20px;
    margin:0 auto;
    background-image:url('/images/editar.png');
    background-size:contain;
`

const IconDelete = styled.a`
    display:block;
    width:20px;
    height:20px;
    margin:0 auto;
    background-image:url('/images/excluir.png');
    background-size:contain;
`

const Item = ({ item
}) => (
    <Itens className={item.darker ? 'darker' : ''}>
        <Row>
            <Col sm={3}><Lente src={item.lente} /></Col>
            <Col sm={2}>{item.qty}</Col>
            <Col sm={3}>{item.price}</Col>
            <Col sm={2}><IconEdit item={item.itemID} href={'https://www.google.com/search?q=editar' + item.itemID} /></Col>
            <Col sm={2}><IconDelete item={item.itemID} href={'https://www.google.com/search?q=deletar' + item.itemID} /></Col>
        </Row>
    </Itens>
)

export default Item;