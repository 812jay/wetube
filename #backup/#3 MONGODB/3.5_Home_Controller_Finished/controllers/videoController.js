import routes from "../routes";
//이건 DB의 element가 아니라 그냥 model임(element를 받는 통로)
import Video from "../models/Video";

//template, template에 추가 할 정보가 담긴 객체
//videos: videos --> videos
export const home = async (req, res) => {
  try {
    //DB에 있는 모든 데이터를 가져온다.
    const videos = await Video.find({});
    throw Error("ninyaninyong");
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  //To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editvideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("delteVideo", { pageTitle: "Delete Video" });
