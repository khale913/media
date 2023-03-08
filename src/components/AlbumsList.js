import { render } from "@testing-library/react";
import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          {album.title}
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div className="">Albums for {user.name}</div>
      <div className="">{content}</div>
    </div>
  );
}

export default AlbumsList;
