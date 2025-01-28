import { nanoid } from "nanoid";
import { URL } from "../models/url.js";

const generateShortId = async (req, res) => {
  try {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" });
    const shortId = nanoid(8);
    await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitedHistory: [],
    });
    return res.json({ id: shortId });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

const redirectToURL = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitedHistory: {
            timestamps: Date.now(),
          },
        },
      }
    );
    return res.redirect(entry.redirectURL)
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const getAllURL = async (req, res)=>{
  try {
    const urls = await URL.find({});
  
    return  res.status(200).json({ data: urls.map((data)=>{
      return {
        shortId: data.shortId,
        redirectUrl : data.redirectURL,
        total_count: data.visitedHistory.length,
      };
    }) });
  } catch (error) {
    console.log(error);
    
    return res.status(400).json({ error: error });
  }
}

export { generateShortId, redirectToURL, getAllURL };
