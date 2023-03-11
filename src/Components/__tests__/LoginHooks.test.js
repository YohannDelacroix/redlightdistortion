import { renderHook, act } from "@testing-library/react-hooks"
import { useLogin } from "../Admin/Login/LoginHooks";
import { MemoryRouter as Router} from 'react-router-dom';


describe("useLogin Tests", () => {
    it("should set initial user to admin string", () => {
        const data = renderHook( () => useLogin(), {
            wrapper: ({children}) => (<Router>{children}</Router>)
        });
        
        expect(data.result.current.usr).toEqual("admin");
    })

    it("should set initial password to empty string", () => {
        const data = renderHook( () => useLogin(), {
            wrapper: ({children}) => (<Router>{children}</Router>)
        });
        
        expect(data.result.current.pwd).toEqual("");
    })

    it("should update user data when call handleChangeUsr", () => {
        const { result } = renderHook( () => useLogin(), {
            wrapper: ({children}) => (<Router>{children}</Router>)
        })
        const value = "user1";
        const e = { target: {value}};

        act( () => {
            result.current.handleChangeUsr(e);
        })

        expect(result.current.usr).toEqual(value);
    })

    it("should update password data when call handleChangePwd", () => {
        const { result } = renderHook( () => useLogin(), {
            wrapper: ({children}) => (<Router>{children}</Router>)
        })
        const value = "1234";
        const e = { target: {value}};

        act( () => {
            result.current.handleChangePwd(e);
        })

        expect(result.current.pwd).toEqual(value);
    })


    it("should enable login button when all login datas are provided", () => {
        const { result } = renderHook( () => useLogin(), {
            wrapper: ({children}) => (<Router>{children}</Router>)
        })

        act( () => {
            result.current.handleChangeUsr({target: {value: "user1"}})
            result.current.handleChangePwd({target: {value: "123"}})
        })

        expect(result.current.enableSubmit).toBeTruthy();
    })
})