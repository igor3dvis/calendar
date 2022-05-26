import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "../src/data/store";

const container = document.getElementById('root');
const root = createRoot(container);

const reRender = (state) => {
root.render(<App state={state}
    howmatchDays={store.howmatchDays.bind(store)}
    funcNumbersDaysOfCurrentMonth={store.funcNumbersDaysOfCurrentMonth.bind(store)}
    getTitleMonth={store.getTitleMonth.bind(store)}
    lastDaysPrevMonth={store.lastDaysPrevMonth.bind(store)} 
    changeCurrMonth={store.changeCurrMonth.bind(store)}/>);
}

reRender(store.getState());

store.subscribe(reRender);