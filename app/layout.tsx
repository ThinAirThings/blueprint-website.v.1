import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Blueprint Apparel',
    description: 'Your Partner in Business Apparel',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <Theme appearance='light' panelBackground='solid' accentColor="blue" radius="small" className="relative">
                    <Header/>
                    <Container
                        className="pt-[100px]"
                        size={{
                            initial: '1',
                            sm: '2',
                            md: '3',
                            lg: '4'
                        }}
                    >
                        {children}
                    </Container>
                    <Footer/>
                </Theme>
            </body>
        </html>
    )
}
