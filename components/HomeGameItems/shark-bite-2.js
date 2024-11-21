import Link from 'next/link';

export default function HomeGameListItem() {
  return (
    <div className="flex flex-col mr-5 mx-auto">
      <Link href="/games/2/shark-bite-2">
        <a className="hover:no-underline">
          <div
            className="w-[150px] h-[150px] rounded-lg"
            style={{
              backgroundImage: 'url("/game-images/shark-bite-2.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="font-bold mt-1">Shark Bite 2</div>
          <div className="text-xs text-gray-400 font-semibold flex">
            <span className="icon-spritesheet-2 icon-thumbs-up mr-1" />
            95%
            <span className="icon-spritesheet-2 icon-user-play ml-3 mr-1" />
            101k
          </div>
        </a>
      </Link>
    </div>
  );
}
