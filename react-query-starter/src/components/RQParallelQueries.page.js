import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchedSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchedFriends = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQParralelQueriesPage = () => {
  const {data: superHeroes} = useQuery("super-heroes", fetchedSuperHeroes);
  const {data: friends} = useQuery("friends", fetchedFriends);

  return <div>ParallelQueries.page</div>;
};
