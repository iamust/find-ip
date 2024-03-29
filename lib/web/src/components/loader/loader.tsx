import css from './loader.module.css'

export default function Loader() {
  return (
    <ul class="flex justify-center list-none space-x-1">
      <li class={`bg-teal-400 opacity-0 rounded w-2 h-2 ${css['dots-1']}`}></li>
      <li class={`bg-teal-400 opacity-0 rounded w-2 h-2 ${css['dots-2']}`}></li>
      <li class={`bg-teal-400 opacity-0 rounded w-2 h-2 ${css['dots-3']}`}></li>
    </ul>
  )
}
