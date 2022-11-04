import { useQuery } from "react-query";
import axios from "axios";

const fetchedSuperHerouse = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { data, isLoading } = useQuery("super-heroes", fetchedSuperHerouse);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
