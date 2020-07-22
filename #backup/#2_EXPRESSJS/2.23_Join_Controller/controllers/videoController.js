import { videos } from "../db";
//template, template에 추가 할 정보가 담긴 객체
//videos: videos --> videos
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editvideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("delteVideo", { pageTitle: "Delete Video" });
