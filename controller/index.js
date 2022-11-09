const fs = require("fs");

const getData = {
  submitName: async (req, res) => {
    try {
      const body = req.body;

      console.log(body);

      let tempData = {
        nama: body.nama,
        alamat: body.alamat,
        email: body.email,
        no_handphone: body.no_handphone,
      };

      var data = fs.readFileSync("user.json");
      var myObject = JSON.parse(data);

      var newData = JSON.stringify(myObject);

      fs.writeFile("user.json", newData, (err) => {
        // error checking
        if (err) throw err;

        console.log("New data added");
      });

      res.status(200).json({
        status: true,
        data: tempData,
        msg: "Berhasil submit data nama",
      });
    } catch (error) {}
  },
};

module.exports = getData;
