import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDriverDetail } from '../../redux/actions';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driverDetail = useSelector((state) => state.driverDetail);

  useEffect(() => {
    dispatch(getDriverDetail(id));
  }, [dispatch, id]);

  return (
      <div>
          <div>
              <p>DETAILS</p>
          </div>
          <div>
              <img src={driverDetail.image} alt="" />
          </div>
          <div>
            <p>Name: {driverDetail.name} {driverDetail.lastname}</p>
            <p>Nationality: {driverDetail.nationality}</p>
            <p>Birthdate: {driverDetail.birthDate}</p>
            {Array.isArray(driverDetail.Teams)
            ? driverDetail.Teams.map((team) => team.name).join(", ")                : driverDetail.teams}
            <p>Description: {driverDetail.description}</p>
          </div>
      </div>
    );
};

export default Detail;