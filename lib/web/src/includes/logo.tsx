import { Link } from '@solidjs/router'
import { Show } from 'solid-js/web'

interface LogoProps {
  class: string
  title: string
  src?: string
}

export default function Logo(props: LogoProps) {
  return (
    <Link class={`flex items-center h-14 ${props.class}`} href="/">
      <Show when={true} fallback={<img alt={props.title} src={props.src} />}>
        <span class="font-semibold text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          {props.title}
        </span>
      </Show>
    </Link>
  )
}
