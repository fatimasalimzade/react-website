import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Auth = createContext();

export const AuthContext = ({children}) => {
    const navigate = useNavigate();
    const [userIn, setUserIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect (() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const data = {
            token: JSON.parse(localStorage.getItem("token"))
        }
        if (data.token !== null) {
            await axios.post(process.env.REACT_APP_CHECK_LOGIN, data)
            .then(res => {
                setUser(res.data);
                setUserIn(true);
            }).catch(err => {
                console.log(err);
                setUserIn(false);
            })
        }
    };

    const logIn = async (data) => {
        await axios
        .post(process.env.REACT_APP_LOGIN, data)
        .then(res => {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            navigate("/");
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
    }

    const signOut = () => {
        localStorage.removeItem("token");
        setUserIn(false);
    }

    const globalStates = {
        user,
        setUser,
        userIn,
        setUserIn,

        logIn,
        signOut
    }

    return <Auth.Provider value = { globalStates }> {children} </Auth.Provider>
}

