import React, { useState, useEffect } from 'react';
import Editor from './Editor';

const App = () => {

  const [ html,  setHTML ] = useState('');
  const [ css, setCSS ] = useState('');
  const [js, setJS ] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <> 
      <div className="pane top-pane">
        <Editor 
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHTML}
        />
        <Editor 
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCSS}
        />
        <Editor 
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJS}
        />
      </div>
      <div className="pane">
        <iframe 
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}

export default App;


