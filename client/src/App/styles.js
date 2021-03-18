import styled from 'styled-components';

const Application = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: white;
    
    // svg, span {
    //     padding-left: 10px;
    // }

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-contents: stretch;

    .adt-platform-desktop & {
        padding: 50px;

        top: 16.6666%;
        left: 16.6666%;
        width: 66.6666%;
        height: 66.6666%;

        flex-direction: column;
    }
`;

export {
    Application,
};