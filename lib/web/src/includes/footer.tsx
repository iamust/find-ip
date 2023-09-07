import { type JSXElement } from 'solid-js/types'

interface FooterProps {
  copyright: string | JSXElement
}

export default function Footer(props: FooterProps) {
  return (
    <footer>
      <div class="max-w-4xl mx-auto">
        <div class="h-14">{props.copyright}</div>
      </div>
    </footer>
  )
}
