import path from "path";

class FileServe {
  constructor(paths = [], basePath) {
    this.paths = paths;
    this.basePath = basePath;
  }

  async serve(req, res) {
    try {
      const { fileName } = req.params;
      const paths = this.paths;
      const basePath = this.basePath;
      const imagePath = path.join(basePath, ...paths, fileName);
      return res.sendFile(imagePath);
    } catch (error) {
      return res.status(400).send({ message: "Invalid Routes!" });
    }
  }
}

export { FileServe };
