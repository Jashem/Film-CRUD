import { useCallback, useEffect, useState } from "react";
import { httpClient } from "./api";

export const useQuerry = (uri) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    status: undefined,
    error: false,
    header: undefined,
  });

  const fetch = useCallback(() => {
    const getData = async () => {
      try {
        const res = await httpClient.get(uri);
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
    getData();
  }, [uri]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state, refetch: fetch };
};
