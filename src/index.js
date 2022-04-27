import {createRoot} from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { App } from './app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)