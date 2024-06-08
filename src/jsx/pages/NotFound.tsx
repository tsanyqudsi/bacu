import type { FC } from 'hono/jsx'
import { BaseLayout } from '../layouts/base'

export const NotFoundPage: FC = () => {
  return (
    <main class='flex justify-center items-center w-full min-h-screen'>
      <img class='w-48 h-48 ' src="/public/images/daizi-logo.svg" />
      <div>
        <p class='text-red-200 font-semibold text-2xl'>
          Content Went Missing Bro
        </p>
        <a href="/" class='text-red-300'>
          Click Here to go back home.
        </a>
      </div>
    </main>
  )
}