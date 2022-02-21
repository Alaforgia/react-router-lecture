import { useParams } from "react-router-dom";

function AnimalDetail() {
  const { id } = useParams();

  return (
    <>
      <h1>Animal Details</h1>
      <p>Details for animal with id of {id}</p>
    </>
  );
}

export default AnimalDetail