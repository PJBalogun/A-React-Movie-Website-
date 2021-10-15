import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: 0 auto;

    h1{
        color: var(--medGray);
        margin: 2rem auto 2rem 5rem;       
        h1{
        font-size: var(--fontSuperBig);
        @media screen and (max-width: 720px){
        font-size: var(--fontBig);
        }
        }
    }   
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 2rem;
    margin: 5rem;
    list-style: none;
`