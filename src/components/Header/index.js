import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'


const ButtonOrder = styled.button`
    width: 200px;
    float: left;
    padding: 10px 10px;
    margin: 20px 1% 10px;
    text-transform: uppercase;
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
    text-align: center;
    align-items: center;
    justify-content: center;
    &:hover{
        background-size: 370%;
        background-position: unset;
    }
`

const ButtonCart = styled.button`
    margin: 25px 0 0;
    background-color: #159fce;
    width: 70px;
    align-items: center;
    justify-content: center;
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 60px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    border:none;
    float: right;
`

const IconButton = styled.img`
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    background-image: url(ico_emgrade.b6f291b….png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50px 50px;

`
const TextButton = styled.span`
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    margin-left: 5px;
`

const ButtonsContainer = styled.div`
    width: 800px;
    text-align: center;
    float: left;
`

const IconCart = styled.img`
    width: 40px;
    height: 40px;
`

const CardCompany = styled.a`
    margin: 25px 10px 0 15px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 12%;
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 60px;
    background-color: #fff;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    float: right;
`

const NameCompany = styled.p`
    margin: 0;
    text-align: center;
    color: #535353;
`

const ButtonChangeCompany = styled.p`
    float: left;
    text-align: center;
    font-size: 11px;
    color: #159fce;
    margin-top: 10px;
`

const ButtonLogout = styled.p`
    float: right;
    text-align: center;
    font-size: 11px;
    color: #159fce;
    margin-top: 10px;
`


const Header = ({
}) => (
    <Row noGutters>
        <Col md={7}>
            <ButtonsContainer>
                <Col>
                    <ButtonOrder>
                        <IconButton src="/images/grade.png" />
                        <TextButton>pedido <br /> em grade</TextButton>
                    </ButtonOrder>
                </Col>
                <Col>
                    <ButtonOrder>
                        <IconButton src="/images/parapar.png" />
                        <TextButton>pedido <br /> par a par</TextButton>
                    </ButtonOrder>
                </Col>
                <Col>
                    <ButtonOrder>
                        <IconButton src="/images/surfacado.png" />
                        <TextButton>pedido surfaçado</TextButton>
                    </ButtonOrder>
                </Col>
            </ButtonsContainer>
        </Col>

        <Col md={5}>

            <CardCompany>
                <NameCompany>COMERCIO OTICO LTDA </NameCompany>
                <ButtonChangeCompany>TROCAR EMPRESA</ButtonChangeCompany>
                <ButtonLogout>SAIR</ButtonLogout>
            </CardCompany>
            <ButtonCart>
                <IconCart src="/images/carrinho.png" />
            </ButtonCart>
        </Col>
    </Row>
)

export default Header
