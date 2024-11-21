import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const games = {
  1: {
    title: 'BIG Paintball',
    image: '/game-images/big-paintball.png',
    description:
      'BIG Paintball is an action-packed FPS game on Roblox. Engage in colorful battles and strategize with your team to emerge victorious!',
    creator: 'Tetsu',
    age: 'All Ages',
  },
  2: {
    title: 'Shark Bite 2',
    image: '/game-images/shark-bite-2.png',
    description:
      "In SharkBite 2 become a boat-eating apex predator or join your friends in a battle of survival against the frenzied shark Jaws.",
    creator: 'Tetsu',
    age: '13+',
  },
};

const GamePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Delay for half a second, then disable the blur
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const game = games[id];

  if (!game) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#1e1e23',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        Waiting for an available server. Retrying...(1)
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Background Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('/game-images/loading.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: loading ? 'blur(8px)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            backgroundColor: '#2e2e35',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            transition: 'opacity 0.3s ease',
            opacity: loading ? 0 : 1, // Fade in when loading is complete
          }}
        >
          <Image
            src={game.image}
            alt={game.title}
            width={300}
            height={300}
            style={{
              borderRadius: '10px',
              objectFit: 'cover',
              marginBottom: '10px',
            }}
          />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            {game.title}
          </h1>
          <p style={{ fontSize: '1rem', color: '#a1a1a6' }}>
            {game.description}
          </p>
        </div>
        <p
          style={{
            marginTop: '20px',
            fontSize: '1rem',
            color: '#a1a1a6',
          }}
        >
          Waiting for an available server. Retrying...(1)
        </p>
      </div>
    </div>
  );
};

export default GamePage;
