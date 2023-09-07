import { Router, Routes, Route } from '@solidjs/router'
import { render } from 'solid-js/web'
// import homePage from './home/page'
// import notFoundPage from './404'
import './index.css'

const root = document.getElementById('app')

function App() {
  return <Router>
    <Routes>
      {/* <Route path="/" component={homePage} />
      <Route path="*" component={notFoundPage} /> */}
    </Routes>
  </Router>
}

render(() => <App />, root)

// // import homePage from '../pages/home'
// // import notFoundPage from '../pages/
// // export default [
// //   {
// //     path: '/',
// //     component:
// //   },
// //   {
// //     path: '*',
// //     component:
// // //   }
// // // ]
