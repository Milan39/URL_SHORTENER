import db from "mongoose";

const connection = async (url) => {
  return await db.connect(url);
};

export { connection };
