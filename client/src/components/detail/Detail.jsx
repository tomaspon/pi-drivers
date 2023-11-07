import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDriverDetail } from '../../redux/actions';
import style from "./Detail.module.css"


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driverDetail = useSelector((state) => state.driverDetail);
  useEffect(() => {
    dispatch(getDriverDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2 className={style.details}>DETAILS</h2>
      <div className={style.detailContainer}>
          <div>
            <div className={style.imgContainer}>
            <img className={style.image} src={driverDetail.image} alt="" />
            <h2 className={style.id}>{id}</h2>
            <h2 className={style.drivDetails}>Nationality: {driverDetail.nationality}</h2>
            <h2 className={style.drivDetails}>Birthdate: {driverDetail.birthDate}</h2>
            <h3 className={style.drivDetails}>Teams: {driverDetail.teams ? driverDetail.teams.join(", ") : ""}</h3>
            </div>
            </div>  
          <div>
            <h2 className={style.drivNames}>{driverDetail.name} {driverDetail.lastName}</h2>
            <div>
            <h2 className={style.drivDescriptTitle}>Description</h2>
            <p className={style.drivDescript}>{driverDetail.description}</p>
            </div>
          </div>
      </div>
      </div>
    );
};

export default Detail;