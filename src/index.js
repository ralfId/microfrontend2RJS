import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));

window.renderMfe2 = (containerId, history) => {
root.render(<App history={history} />);

  //serviceWorker.unregister();
};

window.unmountMfe2 = containerId => {
  root.unmount(containerId);
};

if (!document.getElementById('Mfe2-container')) {
  root.render(<App />);
  //serviceWorker.unregister();
}
