// app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'Bipul Chhetri - Expert Freelance Web Developer | Next.js React Specialist Nepal',
  description: 'Bipul Chhetri - Professional freelance web developer specializing in Next.js, React, and modern web solutions. Transform your business with lightning-fast, SEO-optimized websites. Available for hire in Nepal and worldwide.',
  keywords: 'Bipul Chhetri, freelance web developer, Next.js developer Nepal, React developer, web development services, SEO optimization, modern websites, freelance programmer Nepal',
  authors: [{ name: 'Bipul Chhetri' }],
  creator: 'Bipul Chhetri',
  publisher: 'Bipul Chhetri',
  metadataBase: new URL('https://bipulchhetri.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bipul Chhetri - Expert Freelance Web Developer | Next.js Specialist',
    description: 'Transform your business with cutting-edge web solutions by Bipul Chhetri. Specializing in Next.js, React, and performance-optimized websites.',
    url: 'https://bipulchhetri.dev',
    siteName: 'Bipul Chhetri Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bipul Chhetri - Expert Freelance Web Developer',
    description: 'Professional web developer creating lightning-fast, SEO-optimized websites with Next.js and React.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bipul Chhetri",
              "jobTitle": "Freelance Web Developer",
              "url": "https://bipulchhetri.dev",
              "sameAs": [
                "https://github.com/bipulchhetri",
                "https://linkedin.com/in/bipulchhetri"
              ],
              "knowsAbout": ["Next.js", "React", "Web Development", "SEO"],
              "workLocation": "Nepal",
              "offers": {
                "@type": "Service",
                "name": "Web Development Services",
                "description": "Professional freelance web development using Next.js and React"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
