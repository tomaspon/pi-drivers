function getAllDrivers(drivers) {
  // Verificamos que la variable `drivers` esté inicializada y contenga una lista de objetos.
  if (drivers && Array.isArray(drivers) && drivers.length > 0) {
    // La variable `drivers` está inicializada y contiene una lista de objetos.
    return drivers.map((driver) => {
      // El elemento de la lista `driver` ya es una función, por lo que no es necesario convertirlo.
      if (driver) {
        let teams = [];
        let isFromDb = false;

        if (driver.id && typeof driver.id === "string") {
          isFromDb = true;
          // Si el id es un UUID, es un conductor de la base de datos
          if (driver.Teams && Array.isArray(driver.Teams)) {
            teams = driver.Teams.map((team) => team.name);
          }
        } else {
          // Si el id es un número, es un conductor de la API
          if (typeof driver.teams === 'string') {
            // Verificamos que 'driver.teams' sea una cadena antes de intentar dividirla
            teams = driver.teams.split(',').map((team) => team.trim());
          }
          if (typeof driver.name === 'string') {
            // Si el nombre es una cadena, no se puede dividir en nombre y apellido
            driver.name = { forename: driver.name, surname: driver.lastName };
          }
        }

        const name = driver.name.forename || driver.name;
        const lastName = driver.name.surname || driver.lastName;

        return {
          id: driver.id,
          name: name,
          lastName: lastName,
          description: driver.description,
          image: driver.image.url || driver.image,
          teams: teams,
          nationality: driver.nationality,
          birthDate: driver.dob || driver.birthDate,
          isFromDb: isFromDb,

        };
      } else {
        return null;
      }
    }).filter(driver => driver !== null);
  }
};

module.exports = {
  getAllDrivers
};
