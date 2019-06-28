import * as React from 'react'
import {hot} from 'react-hot-loader/root'
import {Heading} from '@smashing/typography'
import {Button} from '@smashing/button'
import {TextInput} from '@smashing/text-input'
import {Title} from '@smashing/title'
import S from './login.styled'

const Login = () => {
  return (
    <React.Fragment>
      <Title>Login</Title>

      <S.Wrapper>
        <S.Header>
          <Heading as="h1" variant={500} marginTop={0}>
            Site name
          </Heading>
        </S.Header>
        <S.Form>
          <TextInput placeholder="Username..." />
          <TextInput placeholder="Password..." />
          <Button>Sign in</Button>
        </S.Form>
      </S.Wrapper>
    </React.Fragment>
  )
}

export default hot(Login)
