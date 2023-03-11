import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router} from 'react-router-dom';
import Login from "../Admin/Login/Login"

afterEach(() => {
    cleanup();
})

describe("Login component Tests", () => {
    it('should render component', () => {
        const { container } = render(<Router><Login /></Router>);
        expect(container).toMatchSnapshot();
    })

    it("should render the login form with one button", async () => {
        const component = render(<Router><Login /></Router>);
        const buttonList = await component.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    })

    it("should password input to have a password type", () => {
        render(<Router><Login /></Router>);
        const pwd = screen.getByTestId("pwd");
        expect(pwd).toHaveAttribute("type", "password");
    })

    it.skip("should display error if incorrect username or password", () => {
        render(<Router><Login /></Router>)
        const loginBtn = screen.getByTestId('login-btn');
        const usrInputNode = screen.getByTestId('usr');
        const pwdInputNode = screen.getByTestId('pwd');

        userEvent.type(usrInputNode, "sauce");
        userEvent.type(pwdInputNode, "carbonara");
        
        expect(usrInputNode).toHaveValue("adminsauce");
        expect(pwdInputNode).toHaveValue("carbonara")

        userEvent.click(loginBtn);
        expect(screen.getByTestId("error")).toBeInTheDocument();
    })

    it("should disable the button when one of user data is missing", () => {
        render(<Router><Login /></Router>)
        const loginBtn = screen.getByTestId('login-btn');
        expect(loginBtn).toHaveAttribute("disabled");
    })


    it.skip("should remove disable attribute from the button when all user data is provided", async () => {
        const container = render(<Router><Login /></Router>)
        
        const usrInputNode = container.getByTestId('usr');
        const pwdInputNode = container.getByTestId('pwd');

        userEvent.type(usrInputNode, "admin");
        userEvent.type(usrInputNode, "carbo");

        const loginBtn = container.getByTestId('login-btn');

        console.log("LOGIN BTN disabled ? : " , loginBtn.disabled)
        expect(loginBtn).not.toBeDisabled();
    })
})