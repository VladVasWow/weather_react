import {useState, useEffect} from 'react';

export const useCityList = () => {
    const [citiesList, setCitiesList] = useState(JSON.parse(localStorage.getItem("citiesList")) || []);
    useEffect(() => {
      localStorage.setItem("citiesList", JSON.stringify(citiesList))
    },[citiesList]);
    return [citiesList, setCitiesList];
}