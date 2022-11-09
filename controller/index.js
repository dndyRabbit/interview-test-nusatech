const fs = require("fs");

const getData = {
  submitName: async (req, res) => {
    try {
      const body = req.body;

      let tempData = {
        nama: body.nama,
        alamat: body.alamat,
        email: body.email,
        no_handphone: body.no_handphone,
      };

      if (!body.nama || !body.alamat || !body.email || !body.no_handphone) {
        return res.status(400).json({
          status: true,
          data: null,
          msg: "Data harus lengkap.",
        });
      }
      fs.writeFile("./user.json", JSON.stringify(tempData, null, 2), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully stored data.");
        }
      });

      res.status(200).json({
        status: true,
        data: tempData,
        msg: "Berhasil submit data nama",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getName: async (req, res) => {
    try {
      const jsonString = fs.readFileSync("./user.json", "utf-8");
      const data = JSON.parse(jsonString);

      if (!data)
        return res.status(400).send({
          status: false,
          data: null,
          msg: "Data tidak ada.",
        });

      res.status(200).json({
        status: true,
        data,
        msg: "Berhasil mengambil data nama",
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = getData;
