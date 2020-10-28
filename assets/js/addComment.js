import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (commentId, comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  // const deleteCommentBtn = document.createElement("div");
  // const jsDeleteCommentBtn = document.createElement("button");
  // deleteCommentBtn.setAttribute("class", "deleteCommentBtn");
  // jsDeleteCommentBtn.textContent = "❌";
  // jsDeleteCommentBtn.setAttribute("name", "jsDeleteComment");
  // jsDeleteCommentBtn.setAttribute("id", commentId);
  span.innerHTML = comment;
  li.appendChild(span);
  // li.appendChild(deleteCommentBtn);
  // deleteCommentBtn.appendChild(jsDeleteCommentBtn);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  const commentId = response.data;
  console.log(commentId);
  if (response.status === 200) {
    addComment(commentId, comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
