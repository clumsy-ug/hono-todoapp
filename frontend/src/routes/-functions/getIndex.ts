import { getIndexResponse } from "../-types";

export const getIndex = async(): Promise<getIndexResponse> => {
  const res = await fetch('http://localhost:5001/api')
  return res.text()
}
