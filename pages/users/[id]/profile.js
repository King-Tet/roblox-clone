import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import ProfileAvatarItem from '../../../components/ProfileAvatarItem';
import FriendListItem from '../../../components/FriendListItem';
import Container from '../../../components/Container';
import ProfileGroupCarousel from '../../../components/ProfileGroupCarousel';
import HomeGameList from '../../../components/HomeGameList';
import RobloxBadge from '../../../components/Profile/RobloxBadge';


export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useRouter().query; // `id` is the UID from the URL.
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!id) return; // Wait for the `id` to be available.
      setLoading(true);

      try {
        const userDoc = await getDoc(doc(db, 'users', id)); // Query the specific user's document.
        if (userDoc.exists()) {
          setUserData(userDoc.data()); // Set the fetched user data.
        } else {
          console.error('User not found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    

    fetchUserProfile();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>User not found</div>;
  }

  const { name, username, email } = userData;

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <NextSeo
        title={name || username || 'User Profile'}
        description={`${name || username} is one of the millions creating and exploring the endless possibilities of Roblox. Join them on Roblox and explore together!`}
      />
      <div className="section p-4">
        <div className="flex">
          <div
            className="placeholder-spritesheet placeholder-avatar w-32 h-32 rounded-full"
            style={{ backgroundSize: '128px', backgroundPosition: '0 256px' }}
          />
          <div className="flex flex-col leading-tight ml-3">
            <div className="flex flex-grow-0 gap-2">
              <span className="text-[32px] font-extrabold">{name || 'No Name'}</span>
            </div>
            <span className="text-gray-400 text-sm">@{username || 'Unknown'}</span>

            <div className="mt-auto font-medium flex flex-row">
              <Link href={`/users/${id}/friends`}>
                0
              </Link>
              <span className="text-sm font-normal text-gray-400 mr-3 ml-1">Friends</span>
              <Link href={`/users/${id}/friends/followers`}>
                0
              </Link>
              <span className="text-sm font-normal text-gray-400 mr-3 ml-1">Followers</span>
              <Link href={`/users/${id}/friends/following`}>
                0
              </Link>
              <span className="text-sm font-normal text-gray-400 ml-1">Following</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section mt-4 grid grid-cols-2 text-center font-medium">
        <div
          className="p-2 about-boxshadow"
        >
          About
        </div>
        <div className="p-2 hover-about-boxshadow">
          Creations
        </div>
      </div>
      <div className="mt-2">
        { /* changable content through tabs */}
        <span className="text-xl font-bold">About</span>
        <div className="text-gray-300 pb-5 border-b border-neutral-500">
          Ill add a way to change ur description later im too tired rn
        </div>
        <div className="flex text-sm pt-2">
          <span className="text-gray-400">
            <Tippy
              content="No Existing Usernames"
              placement="bottom"
              className="bg-neutral-900 px-3 py-1 text-sm text-gray-400"
              arrow={roundArrow}
            >
              <div className="icon-spritesheet-4 icon-previous-usernames mr-1 opacity-50 hover:opacity-100" />
            </Tippy>
            Previous usernames
          </span>
          <Link href={`/report-abuse/?userId=${id}`}>
            <a
              className="ml-auto text-red-500 font-medium"
            >
              Report Abuse
            </a>
          </Link>
        </div>
      </div>

      {/* Retain all other sections as they are */}
      <div className="mt-4">
        <Container title="Friends (?)" href={`/users/${id}/friends`}>
          <div className="flex shrink-0 overflow-auto">
            <FriendListItem />
          </div>
        </Container>
      </div>
      <div className="mt-2">
        <Container title="Groups" noSeeAll>
          { /* ^^ code custom right content (to replace see all). refer to roblox to understand */}
          <ProfileGroupCarousel />
        </Container>
      </div>

      <div className="mt-3">
        <Container title="Favourites" href="favourites">
          <HomeGameList />
        </Container>
      </div>

      <div className="mt-3">
        <Container title="Roblox Badges" noSeeAll>
          <div className="grid grid-cols-6 gap-3 w-full">
            <RobloxBadge />
            <RobloxBadge />
            <RobloxBadge />
            <RobloxBadge />
            <RobloxBadge />
            <RobloxBadge />
          </div>
        </Container>
      </div>

      {/* Include other sections, such as Groups, Badges, etc., as before */}
    </div>

  );
}
