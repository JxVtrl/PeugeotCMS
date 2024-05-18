import React from 'react';
import * as S from './styles';

type TabsProps = {
  tabs: {
    title: string;
    content: JSX.Element;
  }[];
  defaultTab?: number;
};

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab = 0 }) => {
  const [selectedTab, setSelectedTab] = React.useState(defaultTab);

  return (
    <S.Tabs>
      <S.TabMenu>
        {tabs.map((tab, index) => (
          <S.Tab
            key={index}
            onClick={() => setSelectedTab(index)}
            selected={selectedTab === index}
          >
            {tab.title}
          </S.Tab>
        ))}
      </S.TabMenu>
      <S.TabContent>{tabs[selectedTab].content}</S.TabContent>
    </S.Tabs>
  );
};

export default Tabs;
