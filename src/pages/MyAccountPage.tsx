/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Layout/Container';

export default function MyAccountPage() {
  return (
    <MyAccountWrapper>
      <Container flexDirection="column" justifyContent="center" alignItems="center" maxWidth="1024px">
        <Title>userID님 안녕하세요!</Title>
        <Button
          themetype="darkGray"
          size="large"
          css={css`
            width: 20%;
            margin-top: 30px;
          `}
        >
          로그아웃
        </Button>
      </Container>
    </MyAccountWrapper>
  );
}

const MyAccountWrapper = styled.div`
  width: 100%;
  padding: 80px 0px;
`;
const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 50px;
`;