const DriversController = {
  getAllDrivers: async (req, res) => {
    // Obtiene todos los drivers de la base de datos
    const drivers = await Driver.findAll();

    // Devuelve los drivers
    res.json(drivers);
  },

  getDriverById: async (req, res) => {
    // Obtiene el driver por ID
    const idDriver = parseInt(req.params.idDriver);
    const driver = await Driver.findOne({ where: { id: idDriver } });

    // Si el driver no existe, devuelve un mensaje de error
    if (!driver) {
      res.status(404).json({ message: "Driver not found" });
      return;
    }

    // Devuelve el driver
    res.json(driver);
  },

  getDriversByName: async (req, res) => {
    // Obtiene la palabra a buscar
    const name = req.query.name;

    // Obtiene los drivers que coincidan con la palabra
    const drivers = await Driver.findAll({
      where: {
        name: {
          [Op.ilike]: `%${name}%`,
        },
      },
    });

    // Si no hay drivers coincidentes, devuelve un mensaje de error
    if (!drivers) {
      res.status(404).json({ message: "No drivers found" });
      return;
    }

    // Devuelve los drivers coincidentes
    res.json(drivers);
  },
};

module.exports = DriversController;
