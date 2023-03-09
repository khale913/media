import { useFetchPhotosQuery } from "../store";

function PhotosList({ album }) {
  useFetchPhotosQuery(album);

  return "photos list";
}

export default PhotosList;
