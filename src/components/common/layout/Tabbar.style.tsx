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
    flex-shrink: 0;
`;

export const TabItem = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => (props.active ? "#9a2828" : "#5c5c5c")};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #9a2828;
    }

    span {
        font-size: 12px;
        margin-top: 4px;
        font-weight: ${(props) => (props.active ? "bold" : "normal")};
    }
`;

export const TabIconWrapper = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: ${(props) => (props.active ? "#9a2828" : "#5c5c5c")};
        transition: color 0.3s ease;

        &:hover {
            color: #9a2828;
        }
    }
`;