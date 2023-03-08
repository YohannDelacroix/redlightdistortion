import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import Header from "../Header/Header"

configure({adapter: new Adapter()});

afterEach(() => {
    cleanup();
})

describe('Header Component', () => {
    it('should render header component', () => {
        render(<Router><Header /></Router>);
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeInTheDocument();
    })

    it('should change header appearence', () => {
        
        /*const wrapper = shallow(<Router><Header /></Router>);

        console.log(wrapper.instance().headerStyle)
        //expect(wrapper.instance()).to.equal(null);*/
    })
})
