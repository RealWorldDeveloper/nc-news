import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
       <App />
    <ToastContainer position='bottom-right'/>
    </UserProvider>
   
  </StrictMode>,
  
)
