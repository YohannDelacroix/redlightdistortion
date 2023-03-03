import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router} from 'react-router-dom';
import Header from "../Header/Header"

afterEach(() => {
    cleanup();
})

describe('Header Component', () => {
    it('should render header component', () => {
        render(<Router><Header /></Router>);
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeInTheDocument();
    })
})
