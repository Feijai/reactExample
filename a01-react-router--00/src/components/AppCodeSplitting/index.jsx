import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// TODO
import { lazy, Suspense } from 'react';

import Home from '../Home';
import Menu from '../Menu';

// TODO
const Video = lazy(() => import('../Video'));
const Overlay = lazy(() => import('../Overlay'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        {/* TODO */}
        <Suspense fallback={<div className="display-5">Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />}>
              <Route path="/video/:id" element={<Overlay />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
