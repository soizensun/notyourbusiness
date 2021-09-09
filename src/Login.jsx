import React, { useState } from 'react'
import Textfield from "@atlaskit/textfield";
import { FullScreenBox } from './styledCoponents/LoginStyle'
import { Container, Center } from './styledCoponents/MainStyle'
import { firebaseRegister, firebaseLogin } from './controllers/Authencontroller'

export default function Login(props) {
    const [usenameLogin, setUsenameLogin] = useState("test@gmail.com")
    const [passwordLogin, setPasswordLogin] = useState("123456")

    const [usernameRegister, setUsernameRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("")

    const register = () => {
        // props.setIsLoading(true)
        if (passwordRegister === confirmPasswordRegister) {
            firebaseRegister(usernameRegister, confirmPasswordRegister)
                .then((userCredential) => {
                    var user = userCredential.user;
                    props.onLogin(user.uid)
                    // props.setIsLoading(false)
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    console.log(error.code);
                    // TODO : handle "auth/email-already-in-use" code when user exiting
                });
        }
        else {
            // TODO :  
        }
    }

    const login = () => {
        // props.setIsLoading(true)
        firebaseLogin(usenameLogin, passwordLogin)
            .then((userCredential) => {
                var user = userCredential.user;
                props.onLogin(user.uid)
                // props.setIsLoading(false)
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                console.log(error.code);
                // TODO : handle "auth/user-not-found"  when user not found
            });
    }

    return (
        <div>
            <FullScreenBox>
                <Container>
                    <Center>
                        <p>
                            <div>
                                <Textfield
                                    // style={{ fontWeight: "600" }}
                                    value={usenameLogin}
                                    onChange={(e) => setUsenameLogin(e.target.value)}
                                    type="text"
                                    placeholder="email" />
                            </div>
                            <div>
                                <Textfield
                                    // style={{ fontWeight: "600" }}
                                    value={passwordLogin}
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                    type="password"
                                    placeholder="password" />
                            </div>
                            <div>
                                <button onClick={() => login()}>login</button>
                            </div>
                        </p>


                        <p>
                            <div>
                                <Textfield
                                    // style={{ fontWeight: "600" }}
                                    value={usernameRegister}
                                    onChange={(e) => setUsernameRegister(e.target.value)}
                                    type="text"
                                    placeholder="email" />
                            </div>
                            <div>
                                <Textfield
                                    // style={{ fontWeight: "600" }}
                                    value={passwordRegister}
                                    onChange={(e) => setPasswordRegister(e.target.value)}
                                    type="password"
                                    placeholder="password" />
                            </div>
                            <div>
                                <Textfield
                                    // style={{ fontWeight: "600" }}
                                    value={confirmPasswordRegister}
                                    onChange={(e) => setConfirmPasswordRegister(e.target.value)}
                                    type="password"
                                    placeholder="confirm password" />
                            </div>
                            <div>
                                <button onClick={() => register()}>register</button>
                            </div>
                        </p>

                    </Center>
                </Container>
            </FullScreenBox>
        </div>

    )
}
