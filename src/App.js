import { useState } from 'react';
import './App.css';

const content = [
  {
    summary: 'Lorem ipsum dolor sit amet.',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary:
      'Ipsum officiis unde quaerat recusandae omnis ad nostrum praesentium deleniti maiores harum.',
    details:
      'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary: 'In iusto dolores quas aliquam distinctio eius qui maxime dicta quo accusamus.',
    details:
      'Aenean ac faucibus leo, nec posuere lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vulputate sem felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed varius aliquam ex non.',
  },
  {
    summary: 'Repellat iusto nam deserunt reprehenderit, modi quia.',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleSetActive = (num) => {
    setActiveTab(num);
  };

  return (
    <>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onSetActive={handleSetActive} />
        <Tab num={1} activeTab={activeTab} onSetActive={handleSetActive} />
        <Tab num={2} activeTab={activeTab} onSetActive={handleSetActive} />
        <Tab num={3} activeTab={activeTab} onSetActive={handleSetActive} />
      </div>
      <TabContent summary={content.at(activeTab).summary} details={content.at(activeTab).details} key={content.at(activeTab).summary}/>
    </>
  );
}

function Tab({ num, activeTab, onSetActive }) {
  return (
    <button className={activeTab === num ? 'active tab' : 'tab'} onClick={() => onSetActive(num)}>
      Tab {num + 1}
    </button>
  );
}

function TabContent({ summary, details }) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="tab-content">
      <h4>{summary}</h4>
      <p>{showDetails ? details : details.split(' ').slice(0, 20).join(' ') + '...'}</p>
      <div className="tab-actions">
        <button
          onClick={() => {
            setShowDetails((show) => !show);
          }}
        >
          Show {showDetails ? 'less' : 'more'} details
        </button>
      </div>
    </div>
  );
}
