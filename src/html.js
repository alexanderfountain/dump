import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="p:domain_verify" content="afdd0efa444b8915d7bd29a534e40011"/>
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            const ua = window.navigator.userAgent;
            const msie = ua.indexOf('MSIE ');
            const trident = ua.indexOf('Trident/');
            if (msie > 0 || trident > 0 || /*@cc_on!@*/false || !!document.documentMode) {
              if (
                window.location.pathname
                && window.location.pathname.indexOf('internet-explorer-page') < 0
              ) {
                window.location.replace('/internet-explorer-page');
              }
            }
          }
        ` }} />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="http://www.gstatic.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        <link href="https://www.google-analytics.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link href="https://maps.googleapis.com" rel="preconnect" />
        <link href="http://www.gstatic.com" rel="preconnect" />
        <link href="https://connect.facebook.net" rel="preconnect" />

        <link href="https://www.google-analytics.com" rel="preconnect" crossOrigin='anonymous' />
        <link href="https://www.googletagmanager.com" rel="preconnect" crossOrigin='anonymous' />
        <link href="https://maps.googleapis.com" rel="preconnect" crossOrigin='anonymous' />
        <link href="http://www.gstatic.com" rel="preconnect" crossOrigin='anonymous' />
        <link href="https://connect.facebook.net" rel="preconnect" crossOrigin='anonymous' />

        {props.headComponents}
        
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {/* MODIFICATIONS START */}
        {/* <script
          async defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_AWS_GOOGLE_MAP}&libraries=places`}
        /> */}

        {/* <script 
          type="text/javascript"
          id="hs-script-loader"
          defer
          src="//js.hs-scripts.com/5802445.js" 
        /> */}
        {/* MODIFICATIONS END */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
