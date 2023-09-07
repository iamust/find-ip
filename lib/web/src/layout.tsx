import { type JSXElement } from 'solid-js/types'
import Header from './includes/header'
import Footer from './includes/footer'

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

// export default function ({ page, children }: LayoutProps) {
//     <DefaultLayout page={page}>

// // // import { QueryClientProvider as Query } from 'react-query'
// // import type { ReactNode } from 'react'
// // export default function DefaultLayout({ page, children }: LayoutProps) {
// //   return (
// //     <>
// //       <Helmet>
// //         <title>{page?.title}</title>
// //       </Helmet>
// //       <div className="min-h-screen">{children}</div>
