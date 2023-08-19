import styled from "styled-components";

export const ModalWrapper = styled.div`
  & > button {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-white"]};
    border: 0;
    cursor: pointer;
  }
`;

// diaria area
export const MetasContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const BaseAreas = styled.div`
  flex: 1 1 0%;
  overflow-wrap: break-word;
`;

export const DailyArea = styled(BaseAreas)``;

export const DailyTitle = styled.h2`
  padding: 1.5rem 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DiariaCardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const DailyCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3,
  p {
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 0.75rem;
  }
`;

// semanal area
export const WeeklyArea = styled(BaseAreas)``;

export const WeeklyTitle = styled.h2`
  padding: 1.5rem 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WeeklyCardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const WeeklyCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3,
  p {
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 0.75rem;
  }
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 0.25rem;
    min-height: 24px;
    min-width: 24px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;

// meta area
export const MetasArea = styled.div`
  background: ${(props) => props.theme.primary};
  text-transform: capitalize;
  padding: 1.25rem;
  flex: 1;
  border-radius: 8px;
`;

export const MetaTitle = styled.h2`
  font-size: 1.25rem;
`;

export const MetaCardWrapper = styled.ul`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CardMeta = styled.li`
  /* div do componente card */
  & > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.5rem;
    background: ${(props) => props.theme.secondary};
  }

  /* div children */
  div > div {
  }

  h3 {
    color: ${(props) => props.theme["base-button"]};
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Loading = styled.span`
  content: "";
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
