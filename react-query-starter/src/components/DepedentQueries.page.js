import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchedUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchedCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DepedentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchedUserByEmail(email)
  );

  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchedCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  return <div>DepedentQueriesPage</div>;
};
