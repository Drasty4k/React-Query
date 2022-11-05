import { useQuery } from "react-query";
import axios from "axios";

const fetchedSuperHerouse = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchedSuperHerouse,
    {
      staleTime: 30000,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
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
