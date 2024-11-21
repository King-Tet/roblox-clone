import HomeGameListItem from './HomeGameItems/big-paintball';
import HomeGameListItem1 from './HomeGameItems/shark-bite-2';

export default function HomeGameList() {
  return (
    <div className="grid grid-cols-6 gap-3">
      <HomeGameListItem />
      <HomeGameListItem1 />
      <HomeGameListItem />
      <HomeGameListItem1 />
      <HomeGameListItem />
      <HomeGameListItem1 />
    </div>
  );
}
