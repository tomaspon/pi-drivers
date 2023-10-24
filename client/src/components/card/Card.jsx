import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDriver, removeDriver } from "../../redux/actions";
import style from "./Card.module.css";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, status, species, gender, origin, image }));
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      {isFav ? (
        <button onClick={handleFavorite} className={style.favButton}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={style.favButton}>
          🤍
        </button>
      )}
      {pathname !== "/favorites" ? (
        <button onClick={() => onClose(id)} className={style.closebutton}>
          ✖
        </button>
      ) : (
        ""
      )}
      <Link to={`/detail/${id}`}>
        <div className={style.cardName}>
          <h2>{name}</h2>
        </div>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <h3>{origin}</h3>
        <img src={image} alt={name} className={style.imgid} />
        <h5 className={style.imgid}>ID: {id}</h5>
      </Link>
    </div>
  );
};

export default Card;
