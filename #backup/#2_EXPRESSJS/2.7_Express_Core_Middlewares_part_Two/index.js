//import 명칭 from 경로
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//express의 결과를 app에 저장
const app = express();

const PORT = 4000;

//
const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

//누군가 app.get home(/) 접근하면 함수를 호출하게 한다.
app.get("/", handleHome);

/*........... <- 이쪽에 넣는다면 global 미들웨어 
  ex) 거부 할 IP주소
*/
app.get("/profile", handleProfile);

//localhost 4000번 포트로 실행
//listening 하기 시작할때 함수 handleListening를 호출함
app.listen(PORT, handleListening);
