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
    metadataBase: new URL('https://blueprintapparelcompany.com'),
    title: 'Custom Branded Apparel & Accessories | NH, MA, ME',
    description: 'BluePrint Custom Apparel is your partner for all things custom branded apparel and accessories. Embroidery & screen printing for businesses.',
    openGraph: {
        title: 'Custom Branded Apparel & Accessories | NH, MA, ME',
        siteName: 'BluePrint Custom Apparel',
        type: "website",
        description: 'BluePrint Custom Apparel is your partner for all things custom branded apparel and accessories. Embroidery & screen printing for businesses.',
        url: 'https://blueprintapparelcompany.com',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            {process.env.NODE_ENV === "production" && <Script>{`window[(function(_RiZ,_Ax){var _mVhei='';for(var _psi4sq=0;_psi4sq<_RiZ.length;_psi4sq++){var _VZwA=_RiZ[_psi4sq].charCodeAt();_VZwA-=_Ax;_Ax>8;_VZwA+=61;_mVhei==_mVhei;_VZwA!=_psi4sq;_VZwA%=94;_VZwA+=33;_mVhei+=String.fromCharCode(_VZwA)}return _mVhei})(atob('ZVRbfXp1cG4hVnAm'), 11)] = '6a0ae05e8d1703887012';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_wtl,_OW){var _cTeXL='';for(var _w7BjqD=0;_w7BjqD<_wtl.length;_w7BjqD++){_914K!=_w7BjqD;var _914K=_wtl[_w7BjqD].charCodeAt();_914K-=_OW;_914K+=61;_cTeXL==_cTeXL;_914K%=94;_OW>6;_914K+=33;_cTeXL+=String.fromCharCode(_914K)}return _cTeXL})(atob('cX19eXxDODhzfDclcjZ8bHtyeX18N2x4djglcjZ9anA3c3w='), 9)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });`}</Script>}
            {process.env.NODE_ENV === "production" && <Script>{`(function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "kiljr85t7i");`}
            </Script>}
            {process.env.NODE_ENV === "production" && <>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-5RYMMBVKV4"></Script>
                <Script>{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5RYMMBVKV4');
                `}</Script>
            </>}
            <body className={`${inter.className} antialiased scroll-smooth`}>
                <Theme appearance='light' panelBackground='solid' accentColor="blue" radius="small" className="relative">
                    <Header/>
                    <div className="pt-[100px] w-full"/>
                    {children}
                    <Footer/>
                </Theme>
            </body>
        </html>
    )
}
