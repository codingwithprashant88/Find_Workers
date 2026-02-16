const jobs = require("../Models/Jobs");

const seedJobs = async (req, res) => {
  try {
    const existingJobs = await jobs.countDocuments();

    if (existingJobs > 0) {
      return res.status(400).json({
        success: false,
        message: "Jobs already exist ",
      });
    }

    const findJobs = [
      {
        title: "Carpenter की आवश्यकता है",
        role: "Carpenter",
        price: { min: 600, max: 850, type: "daily" },
        city: "Delhi",
        state: "Delhi",
        experience: "2+ years",
        image:
          "https://dlc-uploaded-files.s3.ap-south-1.amazonaws.com/056a5ba7-f5bc-48ec-8cf0-9c3ee8a3722d/order_photo/Untitled%20design%20-%202026-02-03T103054.137.jpg",
          link: '/carpenter'
      },
      {
        title: "Labour की आवश्यकता है",
        role: "Labour",
        price: { min: 500, max: 700, type: "daily" },
        city: "Surat",
        state: "Gujarat",
        experience: "0–1 year",
        image:
          "https://dlc-uploaded-files.s3.ap-south-1.amazonaws.com/4b8e6e8a-f795-4147-a984-52d308c6b227/order_photo/Untitled%20design%20-%202026-01-27T161446.883.jpg",
          link: '/labour'
      },
      {
        title: "Mason (मिस्त्री) की आवश्यकता है",
        role: "Mason",
        price: { min: 700, max: 900, type: "daily" },
        city: "Indore",
        state: "Madhya Pradesh",
        experience: "3+ years",
        image:
          "https://dlc-uploaded-files.s3.ap-south-1.amazonaws.com/0055defa-642f-4df7-a78e-e3b5f875afef/order_photo/Untitled%20design%20-%202025-09-18T122117.282.jpg",
          link: '/mason'
      },
      {
        title: "Electrician की आवश्यकता है",
        role: "Electrician",
        price: { min: 800, max: 1100, type: "daily" },
        city: "Mumbai",
        state: "Maharashtra",
        experience: "2+ years",
        image:
          "https://dlc-uploaded-files.s3.ap-south-1.amazonaws.com/d1d44466-a875-47c6-b7f6-1827807dadd0/order_photo/Untitled%20design%20(94).jpg",
          link: '/electrician'
      },
      {
        title: "Plumber की आवश्यकता है",
        role: "Plumber",
        price: { min: 700, max: 1000, type: "daily" },
        city: "Pune",
        state: "Maharashtra",
        experience: "2+ years",
        image:
          "https://dlc-uploaded-files.s3.ap-south-1.amazonaws.com/d1d44466-a875-47c6-b7f6-1827807dadd0/order_photo/Untitled%20design%20(94).jpg",
          link: '/plumber'
      },
      {
        title: "Painter की आवश्यकता है",
        role: "Painter",
        price: { min: 600, max: 800, type: "daily" },
        city: "Jaipur",
        state: "Rajasthan",
        experience: "1+ year",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37338bv-A0aSmqbtEmVFUjYAMXJa7bkTXUA&s",
          link: '/painter'
      },
      {
        title: "Welder की आवश्यकता है",
        role: "Welder",
        price: { min: 900, max: 1200, type: "daily" },
        city: "Ahmedabad",
        state: "Gujarat",
        experience: "3+ years",
        image:
          "https://d3e1m60ptf1oym.cloudfront.net/aeca1882-4828-41a0-b166-1773be696944/Brett-Cole-India-01934_xgaplus.jpg",
          link: '/welder'
      },
      {
        title: "Supervisor की आवश्यकता है",
        role: "Supervisor",
        price: { min: 1200, max: 1600, type: "daily" },
        city: "Bengaluru",
        state: "Karnataka",
        experience: "5+ years",
        image:
          "https://img.freepik.com/free-photo/medium-shot-smiley-man-wearing-helmet_23-2149426484.jpg?semt=ais_hybrid&w=740&q=80",
          link: '/supervisor'
      },
      {
        title: "Foreman की आवश्यकता है",
        role: "Foreman",
        price: { min: 1100, max: 1500, type: "daily" },
        city: "Hyderabad",
        state: "Telangana",
        experience: "4+ years",
        image:
          "https://www.shutterstock.com/image-photo/asian-indian-architect-foreman-male-260nw-2621862565.jpg",
          link: '/foremen'
      },
      {
        title: "ITI Technician की आवश्यकता है",
        role: "Technician",
        price: { min: 850, max: 1100, type: "daily" },
        city: "Chennai",
        state: "Tamil Nadu",
        experience: "2+ years",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtoUvWqHGsoj8QXljHnr0_QaCYJ1Gob09bg&s",
          link: '/iti-technician'
      },
    ];
    await jobs.insertMany(findJobs);
    res
      .status(201)
      .json({ message: "Jobs stored successfully ✅", success: true });
  } catch (error) {
    console.error("Post Jobs Error 👉", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getJobs = async (req, res) => {
  try {
    const { role, city } = req.query;
    let filter = {};
    if (role) {
      filter.role = { $regex: role, $options: "i" };
    }
    if (city) {
      filter.city = { $regex: city, $options: "i" };
    }
    const getTheJob = await jobs.find(filter);
    res.status(200).json({
      message: "this is all job category",
      All: getTheJob,
      success: true,
    });
  } catch (error) {
    console.error("get Jobs Error 👉", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteJob = await jobs.deleteOne({ _id: id });
    if (deleteJob.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Job deleted successfully ✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { seedJobs, getJobs, deleteData };
