import * as React from 'react'
import {hot} from 'react-hot-loader/root'
import {useStore} from '@app/utils/use-store'
import {Heading, Paragraph, Text, Strong} from '@smashing/typography'
import {Button} from '@smashing/button'
import {Dialog} from '@smashing/dialog'
import {Avatar} from '@smashing/avatar'
import {Popover} from '@smashing/popover'
import {Title} from '@smashing/title'
import {Menu} from '@smashing/menu'
import S from './landing.styled'
import {Link} from 'react-router-dom'

const Landing = () => {
  const {loremIpsum} = useStore()
  const [isDialogVisible, setIsDialogVisible] = React.useState(false)

  return (
    <React.Fragment>
      <Title>Home</Title>

      <S.Wrapper>
        <S.Header>
          <Heading as="h1" variant={500} marginTop={0}>
            Site name
          </Heading>
          <nav>
            <Popover
              position="bottom-right"
              content={
                <Menu>
                  <Menu.Group title="Account">
                    <Menu.Item>Your profile</Menu.Item>
                    <Menu.Item>Settings</Menu.Item>
                  </Menu.Group>
                  <Menu.Divider />
                  <Menu.Group>
                    <Menu.Item as={Link} to="/login">Sign Out</Menu.Item>
                  </Menu.Group>
                </Menu>
              }
            >
              <Button appearance="minimal">
                <S.UserNavButton>
                  <Avatar name="John Doe" size={24} />
                  <Text intent="info">John Doe</Text>
                </S.UserNavButton>
              </Button>
            </Popover>
          </nav>
        </S.Header>

        <Paragraph>
          {loremIpsum} <Text intent="danger">Danger text</Text>
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          iure eius eos,
          <Strong intent="success">
            mollitia quibusdam minus optio aut
          </Strong>{' '}
          tenetur soluta quam error et dolorem cum quis consectetur reiciendis
          laborum. Amet, mollitia.
        </Paragraph>

        <Paragraph>
          <Button
            appearance="subtle"
            onClick={() => setIsDialogVisible(!isDialogVisible)}
          >
            Open Dialog
          </Button>
        </Paragraph>

        <Dialog
          title="Example modal"
          isShown={isDialogVisible}
          onCloseComplete={() => setIsDialogVisible(false)}
          confirmAppearance="subtle"
          cancelAppearance="subtle"
          intent="success"
        >
          <Paragraph marginTop={0}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            praesentium quod repellendus labore, sit inventore suscipit quasi
            fugiat natus libero esse impedit perferendis deserunt? Accusantium
            quibusdam praesentium error corporis inventore.
          </Paragraph>
        </Dialog>
      </S.Wrapper>
    </React.Fragment>
  )
}

export default hot(Landing)
