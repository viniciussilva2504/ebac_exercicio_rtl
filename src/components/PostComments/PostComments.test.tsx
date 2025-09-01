import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários e exibi-los na tela', () => {
        render(<PostComment />);
        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-submit');

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        expect(screen.getByTestId('comment-content-0')).toHaveTextContent('Primeiro comentário');
        expect(screen.getByTestId('comment-content-1')).toHaveTextContent('Segundo comentário');
    });
});