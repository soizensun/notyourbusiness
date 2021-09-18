import React, { useState } from 'react'
import Textfield from "@atlaskit/textfield";
import { FullScreenBox } from '../../styledCoponents/LoginStyle'
import { Container, Center, ContainerFlex } from '../../styledCoponents/MainStyle'
import { firebaseRegister, firebaseLogin } from '../../controllers/Authencontroller'
import { Button, ErrorMsgBox } from '../../styledCoponents/MainStyle'
import '../../styledCoponents/Login.css'
import { MdKeyboardBackspace } from "react-icons/md"
import packageJson from '../../../package.json';

export default function Login(props) {
    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")

    const [usernameRegister, setUsernameRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("")

    const [onShowRegisterSection, setOnShowRegisterSection] = useState(false)
    const [isVisitMe, setIsVisitMe] = useState(false)

    const [errorMsg, setErrorMsg] = useState("")

    const onRegister = () => {
        if (passwordRegister === confirmPasswordRegister) {
            firebaseRegister(usernameRegister, confirmPasswordRegister)
                .then((userCredential) => {
                    var user = userCredential.user;
                    props.onLogin(user.uid)
                    // props.setIsLoading(false)
                })
                .catch((error) => {
                    if (error.code) setErrorMsg(error.message)
                    setTimeout(() => {
                        setErrorMsg("")
                    }, 5000);
                });
        }
        else {
            setErrorMsg("check your confirm password")
            setTimeout(() => {
                setErrorMsg("")
            }, 5000);
        }
    }

    const onLogin = () => {
        firebaseLogin(usernameLogin, passwordLogin)
            .then((userCredential) => {
                var user = userCredential.user;
                props.onLogin(user.uid)
                // props.setIsLoading(false)
            })
            .catch((error) => {
                if (error.code) setErrorMsg(error.message)
                setTimeout(() => {
                    setErrorMsg("")
                }, 4000);
            });
    }

    const onVisitMe = () => {
        if (isVisitMe) {
            setUsernameLogin("")
            setPasswordLogin("")
        }
        else {
            setUsernameLogin("visitme@notyourbus.com")
            setPasswordLogin("visitme")
        }
        setIsVisitMe(!isVisitMe)
    }

    const onSwitchLoginAndRegisterMode = (mode) => {
        switch (mode) {
            case "showLogin":
                setUsernameRegister("")
                setPasswordRegister("")
                setConfirmPasswordRegister("")

                setOnShowRegisterSection(false)
                break;
            case "showRegister":
                setUsernameLogin("")
                setPasswordLogin("")

                setOnShowRegisterSection(true)
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <FullScreenBox>
                <Container>
                    <Center>

                        {/* LOGO */}
                        <div id="container">
                            <div style={{ marginBottom: "8px" }}>
                                NOT
                            </div>
                            <div style={{ marginBottom: "8px" }}>
                                YOUR
                            </div>
                            <div id="flip">
                                <div><div>business</div></div>
                                <div><div>work</div></div>
                                <div><div>everything</div></div>
                            </div>
                        </div>

                        {/* message */}
                        {errorMsg && <ErrorMsgBox>{errorMsg}</ErrorMsgBox>}

                        {/* LOGIN */}
                        {
                            !onShowRegisterSection &&
                            <p>
                                <div style={{ paddingBottom: "5px" }}>
                                    <Textfield
                                        style={{ height: "50px" }}
                                        value={usernameLogin}
                                        onChange={(e) => setUsernameLogin(e.target.value)}
                                        type="text"
                                        placeholder="email" />
                                </div>
                                <div>
                                    <Textfield
                                        style={{ height: "50px" }}
                                        value={passwordLogin}
                                        onChange={(e) => setPasswordLogin(e.target.value)}
                                        type="password"
                                        placeholder="password" />
                                </div>
                                <Button
                                    style={{ width: "300px", height: "60px", marginTop: "10px", fontSize: "21px" }}
                                    textColor="white"
                                    onClick={() => onLogin()}
                                    disabled={usernameLogin === "" || passwordLogin === ""}
                                >
                                    <span>Login</span>
                                </Button>

                                <ContainerFlex style={{ paddingTop: "13px" }}>
                                    <Button
                                        style={{ fontSize: "14px" }}
                                        textColor="white"
                                        bgColor="#C39BD3"
                                        hoverColor="#C39BD3"
                                        onClick={() => onVisitMe()}
                                    >
                                        <span>{isVisitMe ? "Clear form" : "Visit me"}</span>
                                    </Button>
                                    <div></div>
                                    <Button
                                        style={{ fontSize: "14px" }}
                                        textColor="white"
                                        bgColor="#76D7C4"
                                        hoverColor="#76D7C4"
                                        onClick={() => onSwitchLoginAndRegisterMode("showRegister")}
                                    >
                                        <span>Register</span>
                                    </Button>
                                </ContainerFlex>
                            </p>
                        }

                        {/* REGISTER */}
                        {
                            onShowRegisterSection &&
                            <p>
                                <div style={{ paddingBottom: "5px" }}>
                                    <Textfield
                                        style={{ height: "50px" }}
                                        value={usernameRegister}
                                        onChange={(e) => setUsernameRegister(e.target.value)}
                                        type="text"
                                        placeholder="email" />
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <Textfield
                                        style={{ height: "50px" }}
                                        value={passwordRegister}
                                        onChange={(e) => setPasswordRegister(e.target.value)}
                                        type="password"
                                        placeholder="password" />
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <Textfield
                                        style={{ height: "50px" }}
                                        value={confirmPasswordRegister}
                                        onChange={(e) => setConfirmPasswordRegister(e.target.value)}
                                        type="password"
                                        placeholder="confirm password" />
                                </div>
                                <Button
                                    style={{ width: "300px", height: "60px", marginTop: "10px", fontSize: "21px" }}
                                    textColor="white"
                                    bgColor="#76D7C4"
                                    hoverColor="#76D7C4"
                                    onClick={() => onRegister()}
                                    disabled={usernameRegister === "" || passwordRegister === "" || confirmPasswordRegister === ""}
                                >
                                    <span>Register</span>
                                </Button>

                                <ContainerFlex style={{ paddingTop: "13px" }}>
                                    <Button
                                        textColor="white"
                                        style={{ fontSize: "14px" }}
                                        onClick={() => onSwitchLoginAndRegisterMode("showLogin")}
                                    >
                                        <span>Back</span>
                                    </Button>
                                    <div></div>

                                </ContainerFlex>
                            </p>
                        }
                    </Center>

                </Container>
                <span style={{ fontSize: "12px", color: "#ABB2B9" }}>v.{packageJson.version}</span>

            </FullScreenBox>
        </div>

    )
}
