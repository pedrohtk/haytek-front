import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'


const Wrapper = styled(Container)`
    background: #5b9ae4;
    background: linear-gradient(45deg, #5b9ae4 0, #9aa6ed 75%);
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
`

const MenuContent = styled.div`
margin-left: 15px;
width: calc(100% - 20px);
`

const ParagraphSide = styled.p`
    font-size: 1.2em;   
    color: #fff;
    margin-bottom: 5px;
    margin: 5px 0;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: 'Ropa Sans',sans-serif!important;
`

const ButtonSide = styled.button`
    display: block;
    max-width: 150px;
    width: 100%;
    font-size: 12px;
    color: #fff;
    margin: 5px 0;
    border: 1px solid #fff;
    border-radius: 2px;
    text-decoration: none;
    text-align: center;
    line-height: 25px;
    background-color: transparent;
    height: 27px;
`

const TitleSidebar = styled.p`
    font-size: 15px;
    color: #445b79;
    margin: 32px 0 7px;
`

const ItemNavSidebar = styled.p`
    cursor: pointer;
    display: block;
    width: 100%;
    color: #fff;
    text-decoration: none;
    margin: 5px 0;
    padding-bottom: 3px;
    font-size: 15px;
    font-weight: 500;
    Line-height: 1.5;
    img{
        margin-right: 7px;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        background-image: url(ico_fazerpedido.bdb62df….png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 20px 20px;
    }
`
const Logo = styled.img`
    margin: 0 auto;
    max-width: 275px;
    height: 90px;
`

const IconItemNav = styled.img`
`

const SideBar = ({
}) => (
    <Wrapper>
        <Col>
            <Row>
                <Logo src="/images/logo.png"></Logo>
            </Row>
            <MenuContent>
                <Row>
                    <ParagraphSide>Bem vindo,</ParagraphSide>
                </Row>
                <Row>
                    <ParagraphSide>Pedro Paulo - TS0074</ParagraphSide>
                </Row>
                <Row className="justify-content-md-center">
                    <ButtonSide>TROCAR EMPRESA</ButtonSide>
                </Row>
                <Row>
                    <TitleSidebar>NAVEGAÇÃO</TitleSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/fazerpedido.png" />
                        FAZER PEDIDO
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/meuspedidos.png" />
                        MEUS PEDIDOS
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/financeiro.png" />
                        FINANCEIRO
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/downloads.png" />
                        DOWNLOADS
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/telefone.png" />
                        DÚVIDAS E CONTATOS
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <TitleSidebar style={{ margin: '20px 0px 10px' }}>DADOS PESSOAIS</TitleSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/usuarios.png" />
                        USUÁRIOS
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/enderecos.png" />
                        ENDEREÇOS
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/alterarsenha.png" />
                        ALTERAR SENHA
                    </ItemNavSidebar>
                </Row>
                <Row>
                    <ItemNavSidebar>
                        <IconItemNav src="/images/sair.png" />
                        SAIR
                    </ItemNavSidebar>
                </Row>
            </MenuContent>
        </Col>
    </Wrapper >
)

export default SideBar
