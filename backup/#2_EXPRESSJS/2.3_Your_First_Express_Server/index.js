/*express라는 이름의 폴더를 내 파일들에서 찾으려하고
 여기서 못찾으면 node_module 안에서 찾으려 한다.*/
const express = require("express");
//express의 결과를 app에 저장
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};

//localhost 4000번 포트로 실행
//listening 하기 시작할때 함수 handleListening를 호출함
app.listen(PORT, handleListening);
