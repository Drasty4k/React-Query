import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchedSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicPArallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchedSuperHero(id),
      };
    })
  );
  console.log({ queryResults });
  return <div>ParallelQueries.page</div>;
};
