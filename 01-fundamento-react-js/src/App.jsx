// JSX = JS + XML

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import {Post} from './components/Post'

import styles from './App.module.css'
import './global.css'

export function App() {

  return (
      
      <div>

        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          
          <main>

            <Post
              author="Conrado Costa"
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus consequatur vero dolore hic inventore. Sed, beatae recusandae! Tempora, veniam corporis eligendi quis ullam inventore adipisci eum rerum? Quam, voluptates!"
            />
            
            <Post
              author="Jaqueline Cantão"
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus consequatur vero dolore hic inventore. Sed, beatae recusandae! Tempora, veniam corporis eligendi quis ullam inventore adipisci eum rerum? Quam, voluptates!"
            />

          </main>

        </div>
      </div>
  )
}