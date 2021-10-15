import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
    background: var(--darkGray);
    min-height: 100px;
    padding: 0 20px;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .column{
        background: var(--medGray);
        width: 20%;
        text-align: center;
        border-radius: 10px;
       
    }
    @media screen and (max-width: 768px){
        display: block;
        .column{
             width: 60%;
            margin: 20px auto;
        }
    }
`