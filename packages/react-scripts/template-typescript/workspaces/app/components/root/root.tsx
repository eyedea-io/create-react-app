import React from 'react'
import {hot} from 'react-hot-loader'

const Root: React.FC = () => (
  <div className="Root">
    <header className="Root-header">
      <p>
        Edit <code>workspaces/app/components/root/root.tsx</code> and save to
        reload.
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
)

export default hot(module)(Root)
