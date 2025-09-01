import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <ul className={styles['post-comments']}>
                    {comments.map(({ comment, id }) => (
                        <li className={styles['post-comment']} key={id} data-testid={`comment-item-${id}`}>
                            <p className={styles['post-comment-content']} data-testid={`comment-content-${id}`}>
                                {comment}
                            </p>
                        </li>
                    ))}
            </ul>
                <form onSubmit={handleAddComment} className={styles['post-comments-form']} data-testid="comment-form">
                    <textarea value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} data-testid="comment-textarea" />
                    <button type="submit" className={styles['post-comments-form-button']} data-testid="comment-submit">
                        Comentar
                    </button>
                </form>
        </div>
    );
}

export default Post;