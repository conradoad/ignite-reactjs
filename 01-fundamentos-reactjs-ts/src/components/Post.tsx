import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: string;
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}



export function Post({ author, publishedAt, content }: PostProps ) {
    
    const [ comments, setComments ] = useState([
        "Post muito bacana, hein?!"
    ])

    const [ newCommentText, setNewCommentText ] = useState("")

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("");
        setNewCommentText(e.target.value);
    }

    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("Esse campo é obrigatório");
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt=""/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                    {content.map(line => {
                        if (line.type === "paragraph") {
                            return <p key={line.content}>{line.content}</p>;
                        }
                        else if (line.type === "link") {
                            return <p key={line.content}><a href="#">{line.content}</a></p>;
                        }
                    })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <textarea                 
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid} 
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}