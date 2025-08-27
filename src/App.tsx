import './App.css'
import Header from './components/Header'
import HamburgerButton from './components/HamburgerButton'
import Title from './components/Title'
import Avatar from './components/Avatar'
import ProfileCard from './components/ProfileCard'
import ProfileContainer from './components/ProfileContainer'


function App() {

  return (<>
  <Header>
      <Avatar src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" />
      <Title text="My News Website" emoji="📰" />
      <HamburgerButton />
    </Header>

<ProfileContainer>
  <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
    <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
        <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
        <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
    <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
        <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
        <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
    <ProfileCard
        avatar="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
        name="Nahman Ben Or"
        description="Frontend Developer • React, TS"
      />
    </ProfileContainer>
    </>
  )
}

export default App
