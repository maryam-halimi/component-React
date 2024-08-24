import React, { useState, useEffect } from 'react';
import  "../src/App.css"
function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [tabs, setTabs] = useState([
    { id: 'tab1', title: 'Tab 1', content: 'Mentor 2,you are fantastic.' },
    { id: 'tab2', title: 'Tab 2', content: 'Mentor 2,thank you.' },
    { id: 'tab3', title: 'Tab 3', content: 'Mentor 2,wow you are perfectly.' },
    { id: 'tab4', title: 'Tab 4', content: 'I am perfect too :)' },
  ]);

  useEffect(() => {
    const storedTab = localStorage.getItem('activeTab');
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem('activeTab', tabId);
  };

  return (
    <div>
      <h2>Tabs for saying thank you to Mentor 2</h2>
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </div>
  );
}

export default App;
