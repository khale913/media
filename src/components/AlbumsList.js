import { render } from "@testing-library/react";
import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  console.log(data, error, isLoading);

  const renderedAlbums = data.map((album) => {
    return <div key={album.id}>{album.title}</div>;
  });

  return <div>{renderedAlbums}</div>;
}

export default AlbumsList;
