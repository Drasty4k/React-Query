import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perfom side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perfom side effect after encountering error", error);
  };

  const { data, isLoading, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);
  console.log({
    isLoading,
    isFetching,
  });

  if (isLoading) {
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
