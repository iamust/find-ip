import Header from '../includes/header'
import Footer from '../includes/footer'

// import type { ReactNode } from 'react'
// import Header from '../components/header'
// import Footer from '../components/footer'

// interface LayoutProps {
//   page: Record<string, any>
//   children: ReactNode
// }


export function PageLayout(props) {
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

//     </DefaultLayout>

// // // import { QueryClientProvider as Query } from 'react-query'
// // import type { ReactNode } from 'react'
// // interface LayoutProps {
// //   page: Record<string, any>
// //   children: ReactNode
// // }

// // export default function DefaultLayout({ page, children }: LayoutProps) {
// //   return (
// //     <>
// //       <Helmet>
// //         <title>{page?.title}</title>
// //       </Helmet>
// //       <div className="min-h-screen">{children}</div>
// //     </>
// //   )
// // }
