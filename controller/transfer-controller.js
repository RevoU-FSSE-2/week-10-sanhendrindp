const getAllTransfers = async (req, res) => {
  try {
    const transfers = await req.db.collection("transfers").find().toArray();

    res.status(200).json({
      Message: "Success get transfers ✅",
      Data: transfers,
    });
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

const createTransfers = async (req, res) => {
  const { amount, information } = req.body;

  try {
    const newTransfer = await req.db
      .collection("transfers")
      .insertOne({ amount, information });

    res.status(201).json({
      Message: "Transfer successfully created 💰",
      Data: newTransfer,
    });
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

module.exports = { getAllTransfers, createTransfers };
