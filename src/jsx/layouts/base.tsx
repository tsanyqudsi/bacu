import type { Child, FC } from 'hono/jsx'
import packageJSON from '@pkgJSON'

type BaseProps = { children: Child, title: string, lang: string }

export const BaseLayout: FC<BaseProps> = (props) => {
  return (
    <html lang={props.lang}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <link href={packageJSON.config.tailwindcss} rel="stylesheet" />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}