import styled from "styled-components";

export const Wrapper = styled.div`
  background:#1c1c1c1;
  background-image: linear-gradient(
      to bottom, rgba(0,0,0,0) 41%
      ,rgba(0,0,0,0.65) 75%,
      rgba(0,0,0,1) 100%
      ) , url(${(props) => props.image});
  background-size: 100%,cover;
  background-position: ;
  height: 600px;
  position: relative;
  animation: animateHeroImage 0.65s ease-in;

  @keyframes animateHeroImage{
    from{opacity: 0;}
    to{opacity: 1;}
  }
`
export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`
export const Text = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 40px;
  max-width: 700px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1{
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px){
      font-size: var(--fontBig);
    }
  }
  p{
    font-size: var(--fontMed);
    @media screen and (max-width: 720px){
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px){
    max-width: 100%
  }
`