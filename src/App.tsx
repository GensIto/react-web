import { Routes, Route } from 'react-router-dom'
import React from 'react'

import Home from '@/features/Home'
import NotFound from '@/features/NotFound'

export const WebRoutes = {
  home: '/',
  notFound: '*'
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={WebRoutes.home} element={<Home />} />
      <Route path={WebRoutes.notFound} element={<NotFound />} />
    </Routes>
  )
}

export default App
