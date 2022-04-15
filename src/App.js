import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import { store } from './state/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Form />
      </Provider>
    </>
  );
}

export default App;
