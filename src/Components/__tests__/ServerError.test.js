import { render, screen, cleanup } from '@testing-library/react';
import ServerError from "../Errors/ServerError";

afterEach(() => {
    cleanup();
})

describe('Server Error component', () => {
    it('should render serverError component', () => {
        render(<ServerError />);
        const serverErrorElement = screen.getByTestId('server-error');
        expect(serverErrorElement).toBeInTheDocument();
    })
})

