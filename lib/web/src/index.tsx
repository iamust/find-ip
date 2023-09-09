import { Router, Routes, Route } from '@solidjs/router'
import { render } from 'solid-js/web'
import homePage from './routes/page'
import notFoundPage from './routes/default'
import './index.css'

const root = document.getElementById('app')

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={homePage} />
        <Route path="*" component={notFoundPage} />
      </Routes>
    </Router>
  )
}

render(() => <App />, root)
