import DefaultNavBar from '@react-repo/dashboards';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <DefaultNavBar drawerLinks={[]} />
      <Routes>
        <Route path="/" element={<div>This is the root route.</div>} />
      </Routes>
    </>
  );
}

export default App;
