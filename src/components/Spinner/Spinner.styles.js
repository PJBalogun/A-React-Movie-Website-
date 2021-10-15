import styled from "styled-components";

export const Spinner1 = styled.div`
    border: 0.2rem solid var(--lightGray);
    border-top:  0.2rem solid var(--medGray);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin: 20px auto;
    padding: 5px;
    animation: spin 1s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
           
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
export const Content1 = styled.div`
    border: 0.20rem solid var(--lightGray);
    border-bottom: 0.2rem solid var(--medGray);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    padding: 5px ;
    animation: spin 0.8s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
export const Content2 = styled.div`
    border: 0.15rem solid var(--lightGray);
    border-top: 0.15rem solid var(--medGray);
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 3px;
    animation: spin 0.5s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`