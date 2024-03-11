import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://blueprintapparelcompany.com'),
    title: 'Custom Sweatshirts, Jackets, Hats & Apparel | NH, MA, ME',
    description: 'Premium custom sweatshirts, jackets, T-shirts & hats in NH, MA, ME. Exceptional printing quality with personalized service from real experts. Bulk orders.',
    keywords: [
        "sweatshirts",
        "t-shirts",
        "tee shirts",
        "screen-printing",
        "trade show",
        "custom apparel", 
        "custom sweatshirts", 
        "custom jackets", 
        "custom hats",
        "custom t-shirts", 
        "bulk screen printing",
        "custom printing", 
        "custom embroidery",
        "custom screen printing", 
    ],
    openGraph: {
        // 60 characters
        title: 'Custom Sweatshirts, Jackets, Hats & Apparel | NH, MA, ME',
        siteName: 'BlueprintApparelCompany.com',
        type: "website",
        // 160 characters
        description: 'Premium custom sweatshirts, jackets, T-shirts & hats in NH, MA, ME. Exceptional printing quality with personalized service from real experts. Bulk orders.',
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
            {process.env.NODE_ENV === "production" && 
            <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MLS2GQL2');
            `}
            </Script>
            }
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
                {process.env.NODE_ENV === "production" && <noscript>
                    <iframe 
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MLS2GQL2"
                        height="0" 
                        width="0" 
                        style={{display: "none", visibility: "hidden"}}
                    />
                </noscript>}
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
