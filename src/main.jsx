import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './plugins/router'

// импорт стилей, общих для всего приложения
import "./index.css"

// root - элемент в index.html, куда встраивается React библиотека
// <div id="root"></div>
// В index.html встраивается компонент App, остальные компоненты встраиваются в App
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
