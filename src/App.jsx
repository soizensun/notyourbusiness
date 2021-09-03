import React from 'react'
import NoteSection from './components/Notes/NoteSection'
import { Center, Container } from './styledCoponents/MainStyle'

export default function App() {
    return (
        <Container>
            <Center>
                {/* <div>ฟหกดฟหกด</div> */}
                <NoteSection />
            </Center>
        </Container>
    )
}
