export const SET_VIDEOS = "SET_VIDEOS";

export const setVideo = (video) => {
  return {
    type: SET_VIDEOS,
    payload: video,
  };
};
