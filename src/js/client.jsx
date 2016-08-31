import React from 'react';
import ReactDOM from 'react-dom';

import ShowHideText from './ShowHideText.jsx';

const app = document.getElementById('app');

ReactDOM.render(<ShowHideText content="Hey There" charLimit={3} allowCollapse={true}/>, app);
