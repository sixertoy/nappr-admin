// import './../lib/styles.css';
import '@storybook/addon-console';
import path from 'path';
import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('./stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
