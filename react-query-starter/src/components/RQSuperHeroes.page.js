import { useQuery } from "react-query";
import axios from "axios";

const fetchedSuperHerouse = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perfom side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perfom side effect after encountering error", error);
  };

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchedSuperHerouse,
    {
      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames;
      },
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {/* {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))} */}
      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
};
