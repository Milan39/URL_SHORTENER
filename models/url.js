import { model, Schema } from "mongoose";

const urlSchema = Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitedHistory: [{ timestamps: { type: Number } }],
  },
  {
    timestamps: true,
  }
);

const URL = model("url", urlSchema);

export { URL };
