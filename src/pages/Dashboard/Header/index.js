import React, { useState } from 'react'

import { Container, Content, RightAside, Tabs } from './styles';

import { FaCar, FaMotorcycle } from 'react-icons/fa';

import logo from '../../../assets/logo-webmotors.svg';

const DashboardHeader = () => {
  const [tab, setTab] = useState('car');

  return (
    <Container>
      <img src={logo} alt="" />
      <nav>
        <Tabs>
          <Content  active={tab === 'car'}>
            <aside onClick={() => setTab('car')}>
              <FaCar size={30} color="#9a5264"/>
              <div>
                <p>COMPRAR</p>
                <span>CARROS</span>
              </div>
            </aside>
          </Content>
          
          <Content active={tab === 'bike'}>
            <aside onClick={() => setTab('bike')}>
              <FaMotorcycle size={30} color="#9a5264"/>
              <div>
                <p>COMPRAR</p>
                <span>MOTOS</span>
              </div>
            </aside>
          </Content>
        </Tabs>
        <RightAside>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href={ tab === 'car' ? 
            "https://www.webmotors.com.br/vender/?idcmpint=t1:c17:m07:webmotors:cross_home_vender::botao-anunciar-meu-carro-moto" :
            "https://www.webmotors.com.br/vender/moto?idcmpint=t1:c17:m07:webmotors:cross_home_vender::botao-anunciar-meu-carro-moto" }
          >
            <button>{ tab ==='car' ? 'Vender meu carro' : 'Vender minha moto' }</button>
          </a>
        </RightAside>
      </nav>
    </Container>
  )
}

export default DashboardHeader;
