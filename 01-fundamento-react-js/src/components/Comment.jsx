import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content }) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/2254731?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Conrado Costa</strong>
                            <time title='11 de julho às 8h00' dateTime='2022-07-11 08:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}