import React from 'react';
import {hot} from 'react-hot-loader';

const Root: React.FC = () => {
  return (
    <div className="Root">
      <header className="Root-header">
        <p>
          Edit <code>src/Root.tsx</code> and save to reload.
        </p>
        <a
          className="Root-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(module)(Root);
