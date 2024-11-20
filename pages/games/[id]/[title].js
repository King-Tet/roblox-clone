import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export default function GamePage() {
  const router = useRouter();
  const { id, title } = router.query;

  // Mock data for demonstration purposes
  const games = {
    "1": {
      title: "BIG Paintball",
      description:
        "BIG Paintball is an action-packed FPS game on Roblox. Engage in colorful battles and strategize with your team to emerge victorious! Sequel to the #1 Paintball game on Roblox! 🔥",
      creator: "Tetsu",
      age: "All Ages",
    },
    "2": {
      title: "Shark Bite 2",
      description:
        "In SharkBite 2 become a boat-eating apex predator or join your friends in a battle of survival against the frenzied shark Jaws. Earn and use shark teeth to upgrade your boat, weapons, sharks and even build your own boat in the boat builder to create the ultimate frigate! We can't wait to ship you more updates over the next year, keep your eyes peeled on our new featured page in the store for the next updates 👀👍 300K LIKES TARGET = ??? 👍 200K Likes Code Achieved = 200K👍 New Ducky Boat Hull Skin for the Boat Builder! 100K Likes Code Achieved = 100K👍",
      creator: "Tetsu",
      age: "13+",
    },
  };

  // Fetch game data based on the ID
  const game = games[id];

  // If no game is found, show a fallback message
  if (!game) {
    return <div>Game not found!</div>;
  }

  // State for selected tab
  const [activeTab, setActiveTab] = useState('about');

  // Render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <div className="p-4 text-gray-300"><b>Description</b><br></br><br></br>{game.description}</div>;
      case 'store':
        return <div className="p-4 text-gray-300">Store content coming soon!</div>;
      case 'servers':
        return <div className="p-4 text-gray-300">Server list coming soon!</div>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl ml-56 mt-5">
      <NextSeo title={game.title} description={game.description} />
      <div className="flex">
        <div className="w-[640px] h-[360px] bg-neutral-600" />
        <div className="ml-5 flex flex-col flex-grow">
          <span className="text-3xl font-black">{game.title}</span>
          <span className="text-gray-400 font-semibold">
            By
            <a className="text-white ml-1">
              {game.creator}
              <span
                className="icon-verified-small ml-1"
                title="Premium Badge Icon"
              />
            </a>
          </span>
          <span className="text-gray-400">{game.age}</span>

          <div className="flex flex-col mt-auto">
            <button
              className="bg-emerald-500 w-full rounded-xl p-3 text-4xl"
              type="button"
            >
              ▶
            </button>
            { /* favourite, follow and rating buttons here */}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="section grid grid-cols-3 font-medium text-center">
          <button
            className={`p-2 ${activeTab === 'about' ? 'about-boxshadow' : 'hover-about-boxshadow'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button
            className={`p-2 ${activeTab === 'store' ? 'about-boxshadow' : 'hover-about-boxshadow'}`}
            onClick={() => setActiveTab('store')}
          >
            Store
          </button>
          <button
            className={`p-2 ${activeTab === 'servers' ? 'about-boxshadow' : 'hover-about-boxshadow'}`}
            onClick={() => setActiveTab('servers')}
          >
            Servers
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
}
