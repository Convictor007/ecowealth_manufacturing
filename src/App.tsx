import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Loader } from './components/ui/Loader'
import { Hero } from './components/sections/Hero'
import { Overview } from './components/sections/Overview'
import { Conditions } from './components/sections/Conditions'
import { Process } from './components/sections/Process'
import { Packages } from './components/sections/Packages'
import { Specifications } from './components/sections/Specifications'
import { Audience } from './components/sections/Audience'
import { Contact } from './components/sections/Contact'

function App() {
  useSmoothScroll()

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Conditions />
        <Process />
        <Packages />
        <Specifications />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
