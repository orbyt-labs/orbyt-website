const handler = async (req: any, res: any) => {
  try {
    const { query, socket } = req;
    const { currency } = query;

    return res.status(200).json({});
  } catch (error: any) {
    return res.status(303).json({});
  }
};

export default handler;
