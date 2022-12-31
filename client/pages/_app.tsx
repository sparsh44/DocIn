import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  return(
  <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
  <Component {...pageProps} />
</SessionContextProvider>
)}

export default MyApp
