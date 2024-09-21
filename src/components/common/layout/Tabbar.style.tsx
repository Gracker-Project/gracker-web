import styled from "@emotion/styled";

export const TabbarContainer = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    flex-shrink: 0; /* Add this line to prevent shrinking */
`;

export const TabItem = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => (props.active ? "#9a2828" : "#5c5c5c")};
    cursor: pointer;

    &:hover {
        color: #9a2828;
    }

    svg {
        font-size: 24px;
    }

    span {
        font-size: 12px;
        margin-top: 4px;
    }
`;
