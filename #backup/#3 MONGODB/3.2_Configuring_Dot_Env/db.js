import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//여기서 우리한테 요청하는건 String으로 된 DB
//어디에 DB가 저장되어 있는지 알려줌
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//mongoDB와의 연결
const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB!!");
const handleError = () => console.log(`❌ Error on DB Connection:${error}`);
//once : 한번 실행 되는 것.
db.once("open", handleOpen);
db.on("error", handleError);
