const allDBDrivers = (drivers) => {
  return drivers
    .map((driver) => {
      if (driver) {
        let teams;
        if (typeof driver.id === "string") {
          teams = driver.teams?.split(",").map((team) => team.trim()) || [];
        } else {
          teams = driver.teams || [];
        }
        return {
          id: driver.id,
          name: driver.name.forename,
          lastName: driver.name.surname,
          description: driver.description,
          image: driver.image.url,
          teams: teams,
          nationality: driver.nationality,
          birthDate: driver.dob,
          isFromDb: typeof driver.id === "string",
        };
      } else {
        return null;
      }
    })
    .filter((driver) => driver !== null);
};

module.exports = {
  allDBDrivers,
};
