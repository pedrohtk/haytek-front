import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import React from 'react';
import Item from '../Item';

const ButtonText = styled.span``

const SolidButton = styled.button`
    width: 100%;
    padding: 10px 0;
    margin-top: 20px;
    display: flex;
    background-image: linear-gradient(to right,#f94a5b,#808af1 100%);
    font-family: 'PT Sans',sans-serif;
    color: #fff;
    background-size: 100%;
    background-repeat: repeat-y;
    border-radius: 4px;
    border: none;
    outline: 0;
    transition: all .3s ease-out;
    justify-content: center;
    &:hover{
        background-size: 370%;
        background-position: unset;
    }
`
const HollowButton = styled.button`
    width: 100%;
    margin: 0;
    padding: 10px 0;
    vertical-align:middle;
    box-sizing:border-box;
    background-clip:padding-box, border-box;
    background-origin:padding-box, border-box;
    border:1px solid transparent;
    background-image:linear-gradient(#ffffff, #ffffff), linear-gradient(80deg, #f94a5b 0%, #808af1);
    transition-duration:.2s;
    transition-property:background-image;
    transition:.2s all linear;
    border-radius:4px;
    > ${ButtonText} {
        background:linear-gradient(80deg, #f94a5b 0%, #808af1);
        -webkit-background-clip:text;
        background-clip:text;
        -webkit-text-fill-color:transparent;
        transition:.2s all linear;
        font-family:'PT Sans', sans-serif;
    }
    &.btnOrder {
        margin-top: 0;
    }
    &.btnResumo {
        margin-top: 20px;
    }
`;

const OrderCard = styled.div`
    border-radius: 13px;
    border: 1px solid #E4E4E4;
    background: #FFF;
    margin: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;
`

const OrderDetails = styled.div`
    border-radius: 13px;
    border: 2px solid #E4E4E4;
    margin: 0 0 0 20px;
    box-sizing: border-box;
    overflow: hidden;
`

const OrderHeader = styled.div`
    margin: 1rem 1rem 1rem 1.5rem;
    display: flex;
    height: 25px;
    width: 100%;
`

const OrderTitle = styled.h2`
    font-weight: 700;
    font-size: 20px;
    flex: none;
`

const OrderDivider = styled.div`
    color: #E4E4E4;
    margin: .5rem 0 0 .5rem;
    width: 100%;
    border-bottom: 1px #E4E4E4 solid;
`

const ItensHeader = styled.div`
    background: #d2dee2;
    text-align: center;
    padding: 5px;
    font-weight: bold;
`

const OrderSummary = styled.div`
    width: 100%;
`

const Resumo = styled.div`
    margin: 0 40px;
    border: 1px solid #E4E4E4;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 13px;
    padding: 40px;
`

const ResumoTitle = styled.h1`
    font-family: 'PT Sans',sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: #6079D6;
    text-align: center;
    margin-bottom:1.5rem;
`

const ResumoText = styled.p`
    font-family: 'PT Sans',sans-serif;
    border-bottom: 1px solid #E4E4E4;
    margin: 0;
    padding: 5px 0;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const QuantityProd = styled.span`
    font-weight: 700;
    font-size: 17px;
    float: right;
`

const PurchaseTotal = styled.span`
    font-weight: 700;
    font-size: 26px;
    float: right;
`

const Order = ({ order
}) => (
    <OrderCard>
        <Row noGutters className={'w-100 mb-1 mr-4'}>
            <OrderHeader>
                <OrderTitle>{order.title}</OrderTitle>
                <OrderDivider className={'mr-4'}></OrderDivider>
            </OrderHeader>
        </Row>
        <Row noGutters>
            <Col sm={8}>
                <OrderDetails className={'w-100'}>
                    <ItensHeader>
                        <Row>
                            <Col sm={3}>Lente</Col>
                            <Col sm={2}>Qtd. Total</Col>
                            <Col sm={3}>Valor</Col>
                            <Col sm={2}>Editar</Col>
                            <Col sm={2}>Excluir</Col>
                        </Row>
                    </ItensHeader>
                    {
                        order.itens.map((item) => {
                            return (<div key={item.itemID} ><Item item={item} /></div>)
                        })
                    }
                </OrderDetails>
            </Col>
            <Col sm={4}>
                <OrderSummary className={'w-100'}>
                    <Resumo>
                        <ResumoTitle>Resumo</ResumoTitle>
                        <ResumoText>Quantidade de produtos <QuantityProd>{order.qtyItens}</QuantityProd></ResumoText>
                        <ResumoText style={{ border: 0 }}>Valor total <PurchaseTotal>{order.total}</PurchaseTotal></ResumoText>
                        <SolidButton>Fechar todos os pedidos</SolidButton>
                        <HollowButton className={'btnResumo'}><ButtonText>Continuar Comprando</ButtonText></HollowButton>
                    </Resumo>
                </OrderSummary>
            </Col>
        </Row>
    </OrderCard>
)

export default Order;