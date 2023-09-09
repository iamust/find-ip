import { PageLayout } from './layout'

export default function NotFoundPage() {
  const title = '抱歉，没有找到对应的页面'

  return (
    <PageLayout page={{ title }}>
      <div class='flex justify-center' style={{ height: 'calc(100vh - 100px)' }}>
        <div class="flex items-center divide-x divide-zinc-300">
          <h3 class="text-2xl text-zinc-600 pr-4">🙁</h3>
          <p class="text-zinc-600 pl-4 py-2">{title}</p>
        </div>
      </div>
    </PageLayout>
  )
}
