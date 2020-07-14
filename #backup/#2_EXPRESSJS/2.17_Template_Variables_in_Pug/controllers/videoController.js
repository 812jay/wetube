//template, template에 추가 할 정보가 담긴 객체
export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", potato: 12 });
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editvideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("delteVideo", { pageTitle: "Delete Video" });