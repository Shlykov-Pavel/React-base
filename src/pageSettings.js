import { createContext } from 'react';
let settings = "#b19cd9";

// данное свойство будет доступно в компонентах без необходимости объявления props
export const PageSettings = createContext(settings);