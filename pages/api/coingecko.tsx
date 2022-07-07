import axios from "axios"


export default async (req: any, res: any) => {
  const url = `https://swapi.dev/api/people/1`

  await axios
    .get(url)
    .then(({ data }:{ data: any }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }:{ err: any }) => {
      res.status(400).json({ err })
    })
}