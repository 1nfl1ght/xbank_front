import { Route, Routes } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import MainPage from './views/Main_page/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/transfers' ></Route>
          <Route path='/payments' ></Route>
          <Route path='/depositsandaccounts'></Route>
          <Route path='/cards'></Route>
          <Route path='/credits'></Route>
          <Route path='/history'></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
