import './App.css'
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './route/appRoutes'
import MainPage from './pages/mainPage/MainPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

function App() {
  return (
    <>
      <Routes>
        <Route path={appRoutes.MAIN} element={<MainPage />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
