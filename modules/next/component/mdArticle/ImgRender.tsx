import styled from "styled-components";

const ImgWrapper = styled.div`
  position: relative;
  user-select: none;
  -webkit-user-select: none;
`;

const ImgRender = (img) => {
  const hasUserWidth = img.src.includes("#/w");
  let userSetWidth = 0;
  if (hasUserWidth) {
    const hash = img.src.split("#")[1];
    userSetWidth = Number(hash.replace(/[^0-9]/gi, "")); //extract value from #/w:number
    if (isNaN(userSetWidth) || userSetWidth < 0 || userSetWidth > 800) {
      userSetWidth = 0;
    }
  }
  return (
    <ImgWrapper>
      <img width={userSetWidth ? userSetWidth : "auto"} {...img} />
    </ImgWrapper>
  );
};

export default ImgRender;
