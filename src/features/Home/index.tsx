import React from 'react'

import { FadeUp } from '@/ui/global/Animation/FadeUp'
import { Header } from '@/ui/layout/Header'
import Footer from '@/ui/layout/Footer'
import Section from '@/ui/layout/Section'
import Container from '@/ui/layout/Container'
import Loading from '@/ui/global/Loading'
import { SlideIn } from '@/ui/global/Animation/SlideIn'
import Kv from '@/ui/layout/Kv'

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Kv />
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <SlideIn>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
            <p className="text-orange-300">Hello Vite + React!</p>
          </SlideIn>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Section>
        <Container>
          <FadeUp>
            <p className="text-orange-300">Hello Vite + React!</p>
          </FadeUp>
        </Container>
      </Section>
      <Footer />
      <Loading />
    </main>
  )
}

export default Home
