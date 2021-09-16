import React, { useState } from 'react'
import NoteSection from './components/Notes/NoteSection'
import { Center, Container, FloatingBtn } from './styledCoponents/MainStyle'
import Login from './components/Logins/Login'
import { IoMdLogOut } from 'react-icons/io'

export default function App() {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("currentUserToken"))
    // const [isLoading, setIsLoading] = useState(false)

    const onLogin = (userToken) => {
        localStorage.setItem("currentUserToken", userToken)
        setIsLogin(localStorage.getItem("currentUserToken"))
    }

    const onLogout = () => {
        localStorage.removeItem('currentUserToken')
        window.location.reload()
    }

    return (
        <div>
            <Container>
                <Center>
                    {
                        isLogin ?
                            <NoteSection /> :
                            <Login onLogin={onLogin} />
                    }
                </Center>
                {isLogin &&
                    <FloatingBtn
                    onClick={() => onLogout()}
                        textColor="white"
                        bgColor="#F1948A"
                    >
                        <IoMdLogOut />
                    </FloatingBtn>
                }
            </Container>
        </div>

    )
}


