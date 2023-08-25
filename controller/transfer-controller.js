const { ObjectId } = require("mongodb");

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
  const status = "pending";

  try {
    const newTransfer = await req.db
      .collection("transfers")
      .insertOne({ amount, information, status });

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

const approveTransfer = async (req, res) => {
  // Ensure the user has the 'approver' role before proceeding
  const { role } = req.user;
  if (role !== "approver") {
    return res.status(403).json({
      Message: "Only approvers can approve transfers",
    });
  }

  // Retrieve the transfer ID and update the status to 'approved'
  const { transferId, status } = req.body;

  // Check if the status is valid ("approved" or "not approved")
  if (status !== "approved" && status !== "not approved") {
    return res.status(400).json({
      Message: "Invalid status. Status must be 'approved' or 'not approved'",
    });
  }

  try {
    const result = await req.db
      .collection("transfers")
      .updateOne({ _id: new ObjectId(transferId) }, { $set: { status } });

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        Message: "Transfer not found",
      });
    }

    if (status === "approved") {
      res.status(200).json({
        Message: "Transfer request approved ✅",
      });
    } else {
      res.status(200).json({
        Message: "Transfer request not approved",
      });
    }
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

module.exports = { getAllTransfers, createTransfers, approveTransfer };
