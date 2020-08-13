import styled from "styled-components";
import { theme } from "../../../../constants/theme";

export const TaskHeaderStyle = styled.div`
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: 45% 25% 30%;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(165, 164, 164, 0.2);

    .all-task, .timeline  {
        display: flex;
        align-items: center;
        justify-content: center;   
    }

    .all-task {
        p:first-child {
            margin-right: 1rem;
        }
        p:last-child {
            margin-left: 1.5rem;
        }

    }

    .timeline {
        p {
            padding-left: 1rem;
            color: ${theme.successColor};
        }
    }
`;
