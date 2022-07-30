import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://media-exp2.licdn.com/dms/image/C4D03AQG5_iFfkbLbjg/profile-displayphoto-shrink_800_800/0/1516232532571?e=1663804800&v=beta&t=6f0eBYGMPj5eddR7LNJi-Fjss6H8SXkVVjJ65-3EAY0" />
                    <div className={styles.authorInfo}>
                        <strong>Conrado Costa</strong>
                        <span>Embedded Systems Developer</span>
                    </div>
                </div>

                <time title='11 de julho às 8h00' dateTime='2022-07-11 08:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

                    <p>
                        <a href="">#novoprojeto</a>{' '}
                        <a href="">#nlw</a>{' '}
                        <a href="">#rocketseat</a>
                    </p>

            </div>

            <form className={styles.commentForm}>
                <textarea placeholder='Deixe um comentário'></textarea>

                <footer><button type='submit'>Publicar</button></footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}