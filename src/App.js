import { useState } from 'react';
import { Header } from './components/navbar';
import { Award } from './components/awards';

export const App =()=>{
  
    return (
      <div>
        <Header />
        <Award/>
      </div>
    );
}