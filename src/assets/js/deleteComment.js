import axios from "axios";

const deleteCommentForm = document.querySelectorAll(
  "button[name=jsDeleteComment]"
);
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const removeComment = (commentId) => {
  const deleteBtn = document.getElementById(commentId);
  const li = deleteBtn.parentNode.parentNode;
  li.remove();
  decreaseNumber();
};

const deleteComment = async (event) => {
  const commentId = event.target.id;
  const response = await axios({
    url: `/api/${commentId}/comment/delete`,
    method: "POST",
    data: {
      commentId,
    },
  });
  if (response.status === 200) {
    removeComment(commentId);
  }
};

function init() {
  deleteCommentForm.forEach((btn) => {
    btn.addEventListener("click", deleteComment);
  });
}

if (deleteCommentForm) {
  init();
}
