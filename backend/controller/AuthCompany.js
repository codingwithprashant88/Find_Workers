const hiringCard = require("../Models/Company");

const workerHiring = async (req, res) => {
  try {
    const existingCompany = await hiringCard.countDocuments();

    if (existingCompany > 0) {
      return res.status(400).json({
        success: false,
        message: "Details already exist ",
      });
    }

    const cardData = [
      {
        title: "Factory worker",
        project: "Food manufacturing product",
        work: "Labour Supply",
        price: 17000,
        required: 40,
        category: "Food industry",
        location: "Gujarat",
      },
      {
        title: "Civil Labour Contractor",
        project: "Industrial building",
        work: "Labour Supply",
        price: 30000,
        required: 1000,
        category: "L&T Construction",
        location: "Gujarat",
      },
    ];

    await hiringCard.insertMany(cardData);
    res
      .status(201)
      .json({ message: "Hiring Details Added Successfuly ", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const getCompany = async (req, res) => {
    const {project, location, work} = req.query;
    let filter = {}
    if (project) {
        filter.project = { $regex: project, $options: "i" };
    }
    if (location) {
        filter.location = { $regex: location, $options: "i" };
    }
    if (work) {
        filter.work = { $regex: work, $options: "i" };
    }
  try {
    const seedata = await hiringCard.find(filter);
    res
      .status(200)
      .json({
        message: "this is all hiring post",
        card: seedata,
        success: true,
      });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

module.exports = { workerHiring,getCompany };
