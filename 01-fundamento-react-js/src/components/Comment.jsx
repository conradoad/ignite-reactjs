import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://media-exp2.licdn.com/dms/image/C4D03AQG5_iFfkbLbjg/profile-displayphoto-shrink_800_800/0/1516232532571?e=1663804800&v=beta&t=6f0eBYGMPj5eddR7LNJi-Fjss6H8SXkVVjJ65-3EAY0" />

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
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
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