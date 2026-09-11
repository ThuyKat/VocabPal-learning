import { BrowserRouter, Routes, Route } from 'react-router';
import Flashcards from './pages/Flashcards';
import Words from '@/pages/Words';
import SignIn from '@/pages/SignIn';
import Categories from '@/pages/Categories';
import Layout from '@/pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<Layout />}>
          <Route index element={<Words />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
