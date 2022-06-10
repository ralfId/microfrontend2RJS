import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';


window.renderMfe2 = (containerId, history) => {
  const root = createRoot(document.getElementById(containerId));
  root.render(<App history={history} />);
  serviceWorker.unregister();
};

window.unmountMfe2 = containerId => {
  const root = createRoot(document.getElementById(containerId));
  root.unmount(containerId);
};

if (!document.getElementById('Mfe2-container')) {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
  serviceWorker.unregister();
}
