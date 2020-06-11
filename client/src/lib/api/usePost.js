import { useState } from "react";
import { httpClient } from "./api";

export const usePost = () => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    status: undefined,
    error: false,
    header: undefined,
  });

  const post = async (uri, data) => {
    try {
      const res = await httpClient.post(uri, data);
      setState({
        data: res.data,
        status: res.status,
        error: false,
        header: res.headers,
        loading: false,
      });
    } catch (error) {
      setState({
        data: null,
        status: error.response?.status,
        error: true,
        header: error.response?.headers,
        loading: false,
      });
    }
  };

  return [post, state];
};
