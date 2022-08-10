// JSX = JS + XML

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import {Post} from './components/Post'

import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media-exp2.licdn.com/dms/image/C4D03AQG5_iFfkbLbjg/profile-displayphoto-shrink_800_800/0/1516232532571?e=1663804800&v=beta&t=6f0eBYGMPj5eddR7LNJi-Fjss6H8SXkVVjJ65-3EAY0",
      name: "Conrado Costa",
      role: "Embedded Systems Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-08-01 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CEO Rocketseat"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-08-02 00:01:00")
  }
]


export function App() {

  return (
      
      <div>

        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          
          <main>
            {post.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>

        </div>
      </div>
  )
}