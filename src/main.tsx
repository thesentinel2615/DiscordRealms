import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { ThemeProvider } from '@material-tailwind/react'

function Main() {
  useEffect(() => {
    const loadingElement = document.getElementById('actual-loading');
    if (loadingElement) {
      loadingElement.style.visibility = 'hidden';
    }
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);