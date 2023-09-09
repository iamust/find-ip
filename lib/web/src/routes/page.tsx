import { PageLayout } from './layout'

export default function HomePage() {
  return (
    <PageLayout page={{ title: 'asdasd' }}>
      <div>__HomePage__</div>
      <input value={"asdsd"} />
      <button>asdasd</button>
    </PageLayout>
  )
}

// import axios from 'axios'
// export default axios.create({
//   baseURL: import.meta.env['VITE_TOSSLATE_URL'] || 'https://tosslate.vercel.app'
// })
