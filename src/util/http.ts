import axios from "axios";

export const get = async (url: string) => {
  try {
    const res = await axios.get(url);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("Error while getting data from" + url);
  }
};
