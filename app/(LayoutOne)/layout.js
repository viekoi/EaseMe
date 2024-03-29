import './globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'
import getCurrentUser from '../action/getCurrentUser'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/navbar/Navbar'
import LeftBar from '@/components/leftbar/LeftBar'
import RightBar from '@/components/rightbar/RightBar'
import Provider from '@/components/provider/Provider'



const BVP = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'EaseMe',
  description: 'EaseMe',

}

export default async function RootLayout({ children }) {

  const session = await getCurrentUser()
  return (
    <html lang="en">
      <body className={BVP.className}>
        <Provider>
          <Toaster />
          <Navbar session={session} />
          <div className=" mt-[82px] pb-[40px]">
            <div className="h-full   w-full">
              <div className="grid grid-cols-5  w-full h-full">
                <LeftBar />



                {children}


                <RightBar />

              </div>

            </div>
          </div>
        </Provider>

      </body>
    </html>
  )
}
