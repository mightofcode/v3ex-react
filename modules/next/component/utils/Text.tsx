import styled from "styled-components";

const BoldText = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;
const ContentText = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #34373c;
`;

const NormalText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;

const LightText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #c8cbd0;
`;

const LightText2 = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #e2e2e2; ;
`;

const SimpleLink = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export { LightText, LightText2, NormalText, BoldText, SimpleLink, ContentText };
