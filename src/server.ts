import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const Server = async () => {
  try {
    await mongoose.connect(config.Database_url as string);
    app.listen(config.Port, () => {
      console.log(`Car store is open on port ${config.Port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
Server();
