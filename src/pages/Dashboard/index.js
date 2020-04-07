import React, { useEffect, useState } from 'react';
import { Form } from '@unform/web';

import { toast } from 'react-toastify';

import Select from '../../components/Select';

import { api, local } from '../../services/api';

import { Container, Line, Options, CleanButton, AdvancedSearch, Content } from './styles';

import Checkbox from '../../components/Checkbox';
import Header from './Header';

import { IoIosArrowForward } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';

export default function Dashboard() {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState('');

  const [models, setModels] = useState([]);
  const [model, setModel] = useState('');

  const [versions, setVersions] = useState([]);
  const [version, setVersion] = useState([]);
  
  const [vehicles, setVehicles] = useState([]);

  const [priceRanges, setPriceRanges] = useState([]);
  const [priceRange, setPriceRange] = useState('');

  const [states, setStates] = useState([]);
  const [state, setState] = useState('');

  const [radius, setRadius] = useState([]);
  const [radiusValue, setRadiusValue] = useState('');

  const [years, setYears] = useState([]);
  const [year, setYear] = useState('');
  
  const [isNew, setIsNew] = useState(false);
  const [old, setOld] = useState(false);
  
  function handleSubmit(data) {
    console.log(data);
  }

  async function loadBrands() {
    const response = await api.get('Make');

    setBrands(response.data);
  }
  
  async function handleSetBrand(id) {
    setBrand(id);
    await loadModels(id);
  }

  async function loadModels(makeId) {
    const response = await api.get('Model', {
      params: {
        makeId,
      }
    });

    setModels(response.data);
  }

  async function loadStatesAndRadius() {
    const states = await local.get('states');
    const radius = await local.get('radius');
    const years = await local.get('years');
    const ranges = await local.get('ranges');

    setRadius(radius.data);
    setStates(states.data);
    setYears(years.data);
    setPriceRanges(ranges.data);
  }

  async function handleSetModel(id) {
    setModel(id);
    loadVersions(id);
  }

  async function loadVersions(modelId) {
    const response = await api.get('Version', {
      params: {
        modelId
      }
    });

    setVersions(response.data);
  }

  async function loadVehicles() {
    const response = await api.get('Vehicles', {
      params: {
        page: 1
      }
    });

    setVehicles(response.data);
  }

  function handleResetStateSelect() {
    setState('');
  }

  function handleCleanForm() {
    setState('');
    setRadiusValue('');
    setBrand('');
    setModel('');
    setYear('');
    setPriceRange('');
    setVersion('');

    toast.success('Formulário limpo!');
  }

  useEffect(() => {
    loadBrands();
    loadVehicles();
    loadStatesAndRadius();
  }, [])

  return (
    <Container>
      <Header />
      <Content>
      
        <Form onSubmit={handleSubmit}>
          <Options>
            <Checkbox 
              onChange={ () => setIsNew(!isNew) } 
              label={'Novos'} 
            />
            <Checkbox 
              onChange={ () => setOld(!old) } 
              style={{ marginLeft: 20 }} 
              label={'Usados'} 
            />
          </Options>
          
          <Line>
            <span style={{ width: '38%', borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 0 }}>
              <FiMapPin size={25} color="red" />
              <label style={{ marginLeft: 10 }}>Onde:</label>
              <Select 
                handleChange={ setState } 
                value={ state } 
                options={ states } 
                name="states" 
              />
              <TiDelete 
                style={{ cursor: 'pointer', marginLeft: 'auto' }} 
                onClick={ handleResetStateSelect } 
                size={40} 
                color="#cecece" 
              />
            </span>

            <span style={{ width: '17.4%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
              <label>Raio:</label>
              <Select 
                options={radius} 
                name="radius" 
                value={radiusValue}
                handleChange={ setRadiusValue }
              />
            </span>

            <span style={{ width: '20%', marginLeft: 20 }}>
              <label>Marca:</label>
              <Select 
                handleChange={ handleSetBrand } 
                options={brands} 
                name="brands" 
                value={ brand }
              />
            </span>

            <span style={{ width: '20%', marginLeft: 20 }}>
              <label>Modelo:</label>
              <Select 
                handleChange={ handleSetModel } 
                options={ models } 
                name="makes" 
                value={ model }
              />
            </span>
          </Line>

          <Line>
            <span style={{ width: '25.5%' }}>
              <Select 
                placeholder={'Ano desejado'} 
                handleChange={ setYear } 
                value={ year } 
                options={ years } 
                name="years" 
              />
            </span>

            <span style={{ width: '27.5%', marginLeft: 20 }}>
              <Select 
                placeholder={'Faixa de preço'} 
                handleChange={ setPriceRange } 
                value={ priceRange } 
                options={ priceRanges } 
                name="priceRanges"
              />
            </span>
            
            <span style={{ width: '42.3%', marginLeft: 20 }}>
              <label>Versões:</label>
              <Select 
                handleChange={ setVersion } 
                value={ version } 
                options={ versions  } 
                name="versions" 
              />
            </span>
          </Line>

          <Line>
            <AdvancedSearch>
              <IoIosArrowForward size={20} color="#8f3b45"/>
              Buscar Avançada
            </AdvancedSearch>
            <CleanButton onClick={ handleCleanForm }>Limpar filtros</CleanButton>
            <button type="submit">VER OFERTAS</button>
          </Line>
        </Form>
      </Content>
    </Container>
  );
}