import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Provider } from "jotai"
import "./globals.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ToDo List",
  description: "A simple todo list app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
      </head>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
