import { type JSXElement } from 'solid-js/types'
import Header from '../includes/header'
import Footer from '../includes/footer'

interface LayoutProps {
  page: Record<string, any>
  children: JSXElement
}

export function PageLayout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer copyright={null} />
    </div>
  )
}

//     <DefaultLayout page={page}>
// // // import { QueryClientProvider as Query } from 'react-query'
// //   return (
// //     <>
// //       <Helmet>
// //         <title>{page?.title}</title>
// //       </Helmet>
// //       <div className="min-h-screen">{children}</div>
