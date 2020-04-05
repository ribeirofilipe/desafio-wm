import React, { useEffect, useState } from 'react';
import { Form } from '@unform/web';
import Select from '../../components/Select';

import { api, stateApi, local } from '../../services/api';

import { Container, Line } from './styles';

export default function Dashboard() {
  const [ makes, setMakes] = useState([]);
  const [ models, setModels] = useState([]);
  const [ versions, setVersions] = useState([]);
  const [ vehicles, setVehicles] = useState([]);
  const [ states, setStates] = useState([]);
  const [ radius, setRadius] = useState([]);

  async function handleChangeMake(id) {
    await loadModels(id)
  }

  async function handleChangeModel(id) {
    await loadVersions(id)
  }
  
  function handleSubmit(data) {
    console.log(data);
  }

  async function loadMakes() {
    const response = await api.get('Make');

    setMakes(response.data);
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
    const response = await stateApi.get('');
    const radius = await local.get('radius');

    setStates(response.data.geonames.map(state => ({
      ID: state.toponymName,
      Name: state.toponymName
    })));

    setRadius(radius.data);
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

  useEffect(() => {
    loadMakes();
    loadVehicles();
    loadStatesAndRadius();
  }, [])

  return (
    <Container>
       <Form onSubmit={handleSubmit}>
        <Line>
          <Select placeholderTitle="Onde" options={states} name="states" />
          <Select placeholderTitle="Raio" options={radius} name="radius" />
          <Select style={{marginLeft: 20 }} placeholderTitle="Marca" handleChange={ handleChangeMake } options={makes} name="makes" />
          <Select style={{marginLeft: 20 }} placeholderTitle="Modelo" placeholder="Todos" handleChange={ handleChangeModel } options={models} name="models" />
        </Line>
        <button type="submit">VER OFERTAS</button>
      </Form>
    </Container>
   
  );
}