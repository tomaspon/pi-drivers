import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filter.module.css";
import Cards from "../cards/Cards";
import { getTeams, filterApiDb } from "../../redux/actions";

const Filter = ({ onPageChange }) => {
  const dispatch = useDispatch();
  const [selectedTeam, setSelectedTeam] = useState("null");
  const [filtering, setFiltering] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getTeams());
    dispatch(filterApiDb());
  }, [dispatch]);

  const apiDrivers = useSelector((state) => state.apiDrivers);
  const dbDrivers = useSelector((state) => state.dbDrivers);

  const driversPerPage = 9;
  const startIndex = (currentPage - 1) * driversPerPage;
  const endIndex = startIndex + driversPerPage;

  const allDrivers =
    selectedTeam === "all" ? [...dbDrivers, ...apiDrivers] : selectedTeam === "api" ? apiDrivers : dbDrivers;

  const totalPages = Math.ceil(allDrivers.length / driversPerPage);
  const PrevPage = currentPage > 1;
  const NextPage = currentPage < totalPages;

  let driversHeading = "ALL DRIVERS";

  if (selectedTeam === "database") {
    driversHeading = "DB DRIVERS";
  } else if (selectedTeam === "api") {
    driversHeading = "API DRIVERS";
  }

  const handleSourceFilter = (e) => {
    setSelectedTeam(e.target.value);
    setFiltering(true);
    setCurrentPage(1);
    onPageChange(1);
  };

  const paginated = (direction) => {
    let newPage = currentPage;

    if (direction === "prev" && PrevPage) {
      newPage -= 1;
    } else if (direction === "next" && NextPage) {
      newPage += 1;
    }

    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className={style.filterContainer}>
      <div className={style.filterInput}>
        <select value={selectedTeam} onChange={handleSourceFilter}>
          <option value="null">Filter</option>
          <option value="all">All Drivers</option>
          <option value="database">DB Drivers</option>
          <option value="api">API Drivers</option>
        </select>
      </div>
      <div className={style.driversList}>
        <div>
          <h2 className={style.titleDrivers}>{driversHeading}</h2>
          <Cards drivers={allDrivers.slice(startIndex, endIndex)} filtering={filtering} />
        </div>
      </div>
      <div className={style.paginatedContainerFixed}>
        {PrevPage && (
          <button className={style.prevButton} name="prev" onClick={() => paginated("prev")}>
            ⬅⬅PREV
          </button>
        )}
        {NextPage && (
          <button className={style.nextButton} name="next" onClick={() => paginated("next")}>
            NEXT➡➡
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import style from "./Filter.module.css";
// import Cards from "../cards/Cards";
// import { getTeams, filterApiDb } from "../../redux/actions";

// const Filter = () => {
//   const dispatch = useDispatch();
//   const [selectedTeam, setSelectedTeam] = useState(null);
//   const [filtering, setFiltering] = useState(false); // Nuevo estado para rastrear el filtrado

//   useEffect(() => {
//     dispatch(getTeams());
//     dispatch(filterApiDb());
//   }, [dispatch]);

//   const apiDrivers = useSelector((state) => state.apiDrivers);
//   const dbDrivers = useSelector((state) => state.dbDrivers);

//   const handleSourceFilter = (e) => {
//     setSelectedTeam(e.target.value);
//     setFiltering(true); // Establece el estado de filtrado como verdadero
//   };

//   return (
//     <div className={style.filterContainer}>
//       <div className={style.filterInput}>
//         <span>Filtro: </span>
//         <select value={selectedTeam} onChange={handleSourceFilter}>
//           <option value="all">DB y API</option>
//           <option value="database">DB</option>
//           <option value="api">API</option>
//         </select>
//       </div>
//       <div className={style.driversList}>
//  {selectedTeam !== null && (
//     <div>
//       {selectedTeam === "all" && (
//         <div>
//           <h2>Conductores de la DB:</h2>
//           <Cards drivers={dbDrivers} filtering={filtering} />
//           <h2>Conductores de la API:</h2>
//           <Cards drivers={apiDrivers} filtering={filtering} />
//         </div>
//       )}
//       {selectedTeam === "database" && (
//         <div>
//           <h2>Conductores de la DB:</h2>
//           <Cards drivers={dbDrivers} filtering={filtering} />
//         </div>
//       )}
//       {selectedTeam === "api" && (
//         <div>
//           <h2>Conductores de la API:</h2>
//           <Cards drivers={apiDrivers} filtering={filtering} />
//         </div>
//       )}
//     </div>
//   )}
// </div> 
//     </div>
//   );
// };

// export default Filter;








// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import style from "./Filter.module.css";

// import {
//   getTeams,
//   filterApiDb,
// } from "../../redux/actions";

// const Filter = () => {
//   const dispatch = useDispatch();
//   const [selectedTeam, setSelectedTeam] = useState("all"); // Inicialmente mostrar ambos conductores

//   useEffect(() => {
//     dispatch(getTeams());
//     dispatch(filterApiDb()); // Llamar a la acción para filtrar los conductores
//   }, [dispatch]);

//   const apiDrivers = useSelector((state) => state.apiDrivers); // Acceder a los conductores de la API
//   const dbDrivers = useSelector((state) => state.dbDrivers); // Acceder a los conductores de la base de datos

//   const handleSourceFilter = (e) => {
//     const selectedValue = e.target.value;
//     setSelectedTeam(selectedValue);
//   };

//   return (
//     <div className={style.filterContainer}>
//       <div className={style.filterInput}>
//         <span>Filtro: </span>
//         <label>
//           <input
//             type="radio"
//             value="all"
//             checked={selectedTeam === "all"}
//             onChange={handleSourceFilter}
//           />
//           DB y API
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="database"
//             checked={selectedTeam === "database"}
//             onChange={handleSourceFilter}
//           />
//           DB
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="api"
//             checked={selectedTeam === "api"}
//             onChange={handleSourceFilter}
//           />
//           API
//         </label>
//       </div>
//       <div className={style.driversList}>
//         {selectedTeam === "all" && (
//           <div>
//             <h2>Conductores de la DB:</h2>
//             <ul>
//               {dbDrivers.map((driver) => (
//                 <li key={driver.id}>{driver.name}</li>
//               ))}
//             </ul>
//             <h2>Conductores de la API:</h2>
//             <ul>
//               {apiDrivers.map((driver) => (
//                 <li key={driver.id}>{driver.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {selectedTeam === "database" && (
//           <div>
//             <h2>Conductores de la DB:</h2>
//             <ul>
//               {dbDrivers.map((driver) => (
//                 <li key={driver.id}>{driver.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {selectedTeam === "api" && (
//           <div>
//             <h2>Conductores de la API:</h2>
//             <ul>
//               {apiDrivers.map((driver) => (
//                 <li key={driver.id}>{driver.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Filter;
