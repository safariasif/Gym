import {createRoot} from 'react-dom/client'
import bootstrap from 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { App } from './app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)