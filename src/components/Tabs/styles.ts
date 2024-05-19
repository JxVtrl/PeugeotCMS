import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;

margin-top: 24px;
`;

export const TabMenu = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
`;

type TabProps = {
    selected: boolean;
    };

export const Tab = styled.button<TabProps>`
  color: #2386b3;   
  height: 40px;
  width: 150px;
  border: none;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #fff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
border: 1px solid #2386b3;

   ${(props) => 
    props.selected &&
    `
      background-color: #2386b3;
      color: #fff;
    `}


`;

export const TabContent = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;

overflow-x: auto;
  
`;
