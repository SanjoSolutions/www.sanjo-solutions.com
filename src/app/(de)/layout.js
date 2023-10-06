import "bootstrap/dist/css/bootstrap.css"
import { Layout } from "@/components/Layout.js"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Layout>{ children }</Layout>
      </body>
    </html>
  )
}
