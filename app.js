//import 명칭 from 경로
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

//express의 결과를 app에 저장
const app = express();

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

app.use("/user", userRouter);

export default app;
