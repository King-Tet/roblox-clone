import HomeGameListItem from './HomeGameItems/HomeGameListItem';
import HomeGameListItem1 from './HomeGameItems/HomeGameListItem1';

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
