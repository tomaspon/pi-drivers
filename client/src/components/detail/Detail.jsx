import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDriverDetail } from "../../redux/actions";

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
        <div>
          <div >
            <p>Driver Details</p>
          </div>
        </div>
        <div >
          <img src={driverDetail.image}alt="" />
          <div>
            <div>
              <p>ID: {driverDetail.id}</p>
            </div>
            <div>
              <p>Name: {driverDetail.name}</p>
            </div>
            <div>
              <p>Lastname: {driverDetail.lastname}</p>
            </div>
            <div>
              <p>Nationality: {driverDetail.nationality}</p>
            </div>
            <div>
              <p>Birthdate: {driverDetail.birthdate}</p>
            </div>
            <div>
              {Array.isArray(driverDetail.Teams)
                ? driverDetail.Teams.map((team) => team.name).join(", ")
                : driverDetail.teams}
            </div>
          </div>
        </div>
        <div>
          <p>Description: {driverDetail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;