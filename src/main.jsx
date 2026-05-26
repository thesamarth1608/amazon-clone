import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import store  from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      autoClose={2000}
      style={{ top: "50px" }}
    />
  </Provider>
)
