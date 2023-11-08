import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filter.module.css";
import Cards from "../cards/Cards";
import { getTeams, filterApiDb } from "../../redux/actions/actions";

const Filter = ({ onPageChange }) => {
  const dispatch = useDispatch();
  const [selectedTeam, setSelectedTeam] = useState("all");
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