import AuthWrapper from '@/components/auth/AuthWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <AuthWrapper>{children}</AuthWrapper>
    </div>
  )
}
