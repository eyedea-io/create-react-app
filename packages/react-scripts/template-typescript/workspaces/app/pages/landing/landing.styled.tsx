import styled from 'styled-components/macro'

const S = {
  Wrapper: styled.div`
    max-width: 40rem;
    margin: 0 auto;
    padding: 0 ${_ => _.theme.spacing.sm};
  `,
  Header: styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding-top: ${_ => _.theme.spacing.sm};
  `,
  UserNavButton: styled.span`
    display: grid;
    white-space: nowrap;
    grid-template-columns: auto 1fr;
    column-gap: ${_ => _.theme.spacing.xxs};
    align-items: center;
    margin: 0 -${_ => _.theme.spacing.xxs};
  `,
}

export default S
