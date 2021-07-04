import React from 'react';
import ReactDOM from 'react-dom';
import { ChatProvider } from './context/ChatContext';

import './index.css';
import App from './App';

ReactDOM.render(
  <ChatProvider>
    <App />
  </ChatProvider>,
  document.getElementById('root')
);
