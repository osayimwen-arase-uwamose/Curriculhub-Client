import {
  useCallback,
  useEffect,
  useState,
} from "react";

import useAxiosPrivate from "./useAxiosPrivate.js";

import {
  getHubs,
  createHub,
} from "../services/dashboard.service.js";
import returnNullOrChangeToNumber from "../utils/returnNullOrChangeToNumber.js";

const useHubs = () => {
  const axiosPrivate =
    useAxiosPrivate();

  const [hubs, setHubs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const [creating, setCreating] =
    useState(false);

  const [createError, setCreateError] =
    useState(null);

  const fetchHubs =
    useCallback(async () => {
      setLoading(true);
      setError(null);

      try {
        const data =
          await getHubs(
            axiosPrivate
          );
        /*
         * Placeholder response extraction.
         *
         * Adapt this once your actual
         * backend response is confirmed.
         */
        setHubs(
          data?.data?.hubs
        );
      } catch (error) {
        console.error(
          "Failed to fetch hubs:",
          error
        );

        setError(error);
      } finally {
        setLoading(false);
      }
    }, [axiosPrivate]);

  const handleCreateHub =
    useCallback(
      async (payload) => {
        payload.maxMembers = returnNullOrChangeToNumber(payload.maxMembers);
        setCreating(true);
        setCreateError(null);

        try {
          const data =
            await createHub(
              axiosPrivate,
              payload
            );

          /*
           * Placeholder response extraction.
           *
           * Adapt this once the actual
           * create-hub response is confirmed.
           */
          const hub =
            data?.data?.hub ??
            data?.hub ??
            data?.data;

          if (hub) {
            setHubs((currentHubs) => [
              hub,
              ...currentHubs,
            ]);
          }

          return hub;

        } catch (error) {
          console.error(
            "Failed to create hub:",
            error
          );

          setCreateError(error);

          throw error;

        } finally {
          setCreating(false);
        }
      },
      [axiosPrivate]
    );

  useEffect(() => {
    fetchHubs();
  }, [fetchHubs]);

  return {
    hubs,
    loading,
    error,

    creating,
    createError,

    refetch: fetchHubs,
    createHub: handleCreateHub,
  };
};

export default useHubs;