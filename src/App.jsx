import React from 'react'
import { Head, Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import chroma from 'chroma-js'

export const pageContainerSelector = 'body > #root > :first-child > :first-child'

export const primaryColor = chroma('#ff1d25');

function App() {
  return (
    <Root>

      <Head>
        <title>Register</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <React.Suspense fallback={<em>Loading…</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
