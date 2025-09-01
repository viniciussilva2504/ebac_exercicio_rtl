import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img
            className={styles['post-image']}
            src={imageUrl}
            alt="Miniatura do Batmóvel"
            onError={e => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = 'none';
                const emoji = img.nextElementSibling as HTMLElement | null;
                if (emoji) emoji.style.display = 'block';
            }}
        />
        <span
            style={{ display: 'none', fontSize: '3rem', textAlign: 'center', width: '100%' }}
            role="img"
            aria-label="automóvel"
            className={styles['post-image']}
        >
            🚗
        </span>
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;