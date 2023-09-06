

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



// import {
//   Route,
//   Switch,
//   Redirect,
//   BrowserRouter as Router
// } from 'react-router-dom'
// import { QueryClientProvider as Query } from 'react-query'
// import { StoreContext } from 'storeon/react'

// export default function App({ client, routes, store }) {
//   return (
//     <StoreContext.Provider value={store}>
//       <Query client={client}>
//         <Router>
//           <Switch>
//             {routes.map(({ path, component, redirect }, index: number) => {
//               // prettier-ignore
//               return !component && redirect
//                 ? <Redirect exact key={index} from={path} to={redirect} />
//                 : <Route exact key={index} path={path} component={component} />
//             })}
//           </Switch>
//         </Router>
//       </Query>
//     </StoreContext.Provider>
//   )
// }
