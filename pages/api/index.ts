export default async function handle (req: any, res: any) {
    try {
      switch (req.method) {
        case 'GET': {
            return res.status(200)
        }
        default:
          break
      }
    } catch (error: any) {
      console.log(error)
      return res.status(500).json({ ...error, message: error.message })
    }
}