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
  Form: styled.form`
    display: grid;
    grid-auto-flow: row;
    row-gap: ${_ => _.theme.spacing.xxs};
    padding-top: ${_ => _.theme.spacing.md};
    max-width: 320px;
  `,
}

export default S
