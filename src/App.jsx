import React, { useState } from 'react'
import NoteSection from './components/Notes/NoteSection'
import { Center, Container } from './styledCoponents/MainStyle'
import Login from './Login'
// import ProgressBar from '@atlaskit/progress-bar';

export default function App() {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("currentUserToken"))
    // const [isLoading, setIsLoading] = useState(false)

    const onLogin = (userToken) => {
        localStorage.setItem("currentUserToken", userToken)
        setIsLogin(localStorage.getItem("currentUserToken"))
    }

    return (
        <div>
            {/* {isLoading && <ProgressBar isIndeterminate />} */}
            <Container>
                <Center>
                    {
                        isLogin ?
                            <NoteSection /> :
                            <Login onLogin={onLogin}/>
                    }
                </Center>
            </Container>
        </div>

    )
}
