import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.heading1};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.heading2};
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.heading3};
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.heading4};
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.text};
`;

export const Small = styled(Text)`
  font-size: ${({ theme }) => theme.small};
`;

export const Strong = styled(Text)`
  font-weight: bold;
`;
