import * as React from 'react'
import {Link} from '@reach/router'
import * as S from './header.styled'
import {Heading, Text} from '@smashing/typography'
import {Avatar} from '@smashing/avatar'
import {Popover} from '@smashing/popover'
import {Menu} from '@smashing/menu'
import {Button} from '@smashing/button'

const UserDropdown = (
  <Menu>
    <Menu.Group title="Account">
      <Menu.Item>Your profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
    </Menu.Group>
    <Menu.Divider />
    <Menu.Group>
      <Menu.Item as={Link} to="/login">
        Sign Out
      </Menu.Item>
    </Menu.Group>
  </Menu>
)

export interface HeaderProps {
  /**
   * Page title
   * @default
   */
  title: string
}

export const Header = ({
  title
}: HeaderProps) => (
  <S.Header>
    <Heading as="h1" variant={500} marginTop={0}>
      {title}
    </Heading>
    <nav>
      <Popover position="bottom-right" content={UserDropdown}>
        <Button appearance="minimal">
          <S.UserNavButton>
            <Avatar name="John Doe" size={24} />
            <Text intent="info">John Doe</Text>
          </S.UserNavButton>
        </Button>
      </Popover>
    </nav>
  </S.Header>
)

export default Header
