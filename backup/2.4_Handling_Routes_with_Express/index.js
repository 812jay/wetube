/*express라는 이름의 폴더를 내 파일들에서 찾으려하고
 여기서 못찾으면 node_module 안에서 찾으려 한다.*/
const express = require("express");
//express의 결과를 app에 저장
const app = express();

const PORT = 4000;

//
const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};

function handleHome(req, res) {
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

//누군가 app.get home(/) 접근하면 함수를 호출하게 한다.
app.get("/", handleHome);

app.get("/profile", handleProfile);

//localhost 4000번 포트로 실행
//listening 하기 시작할때 함수 handleListening를 호출함
app.listen(PORT, handleListening);
