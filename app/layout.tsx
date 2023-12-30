'use client'
import { Inter } from 'next/font/google'
import { Providers } from "./Providers";
import './globals.css'
import ModalInfo from './Common/Modal/page';
import { Provider } from 'react-redux';
import { persistor, store } from './Context/store';
import { PersistGate } from 'redux-persist/integration/react';
const inter = Inter({ subsets: ['latin'] })




const onBeforeLift = () => {
  // take some action before the gate lifts
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        {/* <PersistGate loading={null} onBeforeLift={onBeforeLift}
          persistor={persistor}> */}
          <body className={inter.className}>
            <div className='' >
              <Providers>
                {children}
              </Providers>
            </div>
            <ModalInfo />
          </body>
        {/* </PersistGate> */}
      </Provider>
    </html>
  )
}
