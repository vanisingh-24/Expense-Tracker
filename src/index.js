import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="a355910e-8a44-41cb-aaf5-689f0cb2db68" language="en-US">
        <Provider>
<App />
</Provider>
    </SpeechProvider>,
document.getElementById('root'));
