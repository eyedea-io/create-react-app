import * as React from 'react'
import {hot} from 'react-hot-loader/root'
import {useStore} from '@app/utils/use-store'
import {Paragraph, Text, Strong} from '@smashing/typography'
import {Button} from '@smashing/button'
import {Dialog} from '@smashing/dialog'
import {Title} from '@smashing/title'
import * as S from './landing.styled'
import * as C from './landing.components'

const Landing: React.FC = () => {
  const {loremIpsum} = useStore()
  const [isDialogVisible, setIsDialogVisible] = React.useState(false)

  return (
    <React.Fragment>
      <Title>Home</Title>
      <S.Wrapper>
        <C.Header />

        <Paragraph>
          {loremIpsum} <Text intent="danger">Danger text</Text>
        </Paragraph>

        <Paragraph>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution.{' '}
          <Strong intent="success">
            User generated content in real-time will have multiple touchdowns
            for offshoring.
          </Strong>{' '}
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
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximize the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration.
          </Paragraph>
        </Dialog>
      </S.Wrapper>
    </React.Fragment>
  )
}

export default hot(Landing)
