import { Router } from '@solidjs/router'
import { render } from 'solid-js/web'
import './index.css'

const root = document.getElementById('app')

function App() {
  return <div>__App__</div>
}

render(() => <App />, root)

// import { createElement } from 'react'
// import { render } from 'react-dom'
// export function createApp(app: any, props: any) {
//   const component = createElement(app, props, null)
//   function mount(identifier: string) {
//     const appId = identifier.replace(/#/, '')
//     const appEl = document.getElementById(appId)
//     render(component, appEl)
//     return component
//   }
//   return {
//     component,
//     mount
//   }
// }
