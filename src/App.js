import React from 'react';
import './App.css';
import { Input } from "./Input";
import { CardList } from "./CardList";
import { useCityList } from './hooks/useCityList';
 
function App() { 
  const [citiesList, setCitiesList] = useCityList();

  return (
    <div className="Main">
        <Input setCitiesList = {setCitiesList}/>
        <CardList citiesList = {citiesList} />
    </div>
  );
}

export default App;
