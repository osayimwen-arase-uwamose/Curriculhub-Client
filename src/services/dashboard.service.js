const HUBS_ENDPOINT = "/hubs";

const getHubs = async (axiosPrivate) => {
  const response = await axiosPrivate.get(
    HUBS_ENDPOINT
  );

  return response.data;
};

const getHub = async (
  axiosPrivate,
  hubId
) => {
  const response = await axiosPrivate.get(
    `${HUBS_ENDPOINT}/${hubId}`
  );

  return response.data;
};

const createHub = async (
  axiosPrivate,
  hubData
) => {
  const response = await axiosPrivate.post(
    HUBS_ENDPOINT,
    hubData
  );

  return response.data;
};

const updateHub = async (
  axiosPrivate,
  hubId,
  hubData
) => {
  const response = await axiosPrivate.patch(
    `${HUBS_ENDPOINT}/${hubId}`,
    hubData
  );

  return response.data;
};

const deleteHub = async (
  axiosPrivate,
  hubId
) => {
  const response = await axiosPrivate.delete(
    `${HUBS_ENDPOINT}/${hubId}`
  );

  return response.data;
};

export { 
  getHubs,
  getHub,
  createHub,
  updateHub,
  deleteHub,
};
