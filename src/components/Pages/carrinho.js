import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Order from '../Order';

/* VARIABLES */
var CartID = '0001';

/* STYLES */
const Wrapper = styled.div`
    height: calc(100vh - 100px);
    overflow-y: scroll;
    overflow-x: clip;
    background-color: #f7f9fa;
`

const CartHeader = styled.div`
    height: 40px;
    margin: 12px 40px 0 20px;
    border-bottom: 1px solid #3a94df;
`

const CartTitle = styled.h1`
    display: initial;
    color: #3a94df;
    font-weight: 700;
    background-color: #f7f9fa;
    margin: 0;
    padding-right: 10px;
`

/* SCRIPTS */
function fillItens() {
    let itemList = [];
    let j = 10;
    for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
        let item = {};
        item.lente = 'https://repositorio.lenteshaytek.com.br/FS56EB.jpg';
        item.qty = Math.floor(Math.random() * 10);
        item.price = (Math.random() * 100).toFixed(2);
        item.itemID = '0' + j + i;
        if ((i % 2) > 0) {
            item.darker = true;
        } else {
            item.darker = false;
        }
        itemList.push(item)
        j += 10;
    }
    return itemList;
}

function fillOrders() {
    let orderList = [];
    let nomesPedido = ['Par a Par', 'Surfaçado', 'Grade', 'Surfaçado', 'Grade', 'Par a Par', 'Grade', 'Surfaçado']
    for (let i = 0; i < nomesPedido.length; i++) {
        let order = {};
        order.ID = '0' + i + Math.floor(Math.random() * 10);
        order.title = nomesPedido[i];
        order.total = 0;
        order.qtyItens = 0;
        order.itens = fillItens();
        order.itens.forEach(item => {
            order.total += item.price * item.qty;
            order.qtyItens += item.qty;
        })
        order.total = order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 8 })
        orderList.push(order)
    }
    return orderList;
}

const Carrinho = ({
}) => (
    <Wrapper sm={12} key={CartID}>
        <Row noGutters>
            <Col sm={12}>
                <CartHeader>
                    <CartTitle>Carrinho</CartTitle>
                </CartHeader>
            </Col>
        </Row>
        <Row noGutters>
            <Col sm={12}>
                {
                    fillOrders().map((order) => {
                        return (<div key={order.ID}><Order order={order}></Order></div>);
                    })
                }
            </Col>
        </Row>
    </Wrapper>
)

export default Carrinho