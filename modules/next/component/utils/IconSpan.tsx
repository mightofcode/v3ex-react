import styled from "styled-components";

interface Props {
  size?: string;
  color?: string;
}

const IconSpan = styled.span<Props>`
    display: flex;
    font-size:${(props) => props.size};
    color:${(props) => props.color}};
`;

export default IconSpan;
