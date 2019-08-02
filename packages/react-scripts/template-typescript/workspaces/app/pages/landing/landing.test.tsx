import * as React from 'react'
import * as ReactShallowRenderer from 'react-test-renderer/shallow'
import Landing from '../landing'

describe('<Landing />', () => {
  const renderer = ReactShallowRenderer.createRenderer()

  it('renders', () => {
    expect(renderer.render(<Landing />)).toMatchSnapshot()
  })
})
