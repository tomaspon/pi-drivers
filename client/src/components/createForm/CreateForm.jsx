import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from '../createForm/validation';
import { getTeams } from '../../redux/actions';
import style from "../createForm/CreateForm.module.css";

const CreateForm = () => {
  const dispatch = useDispatch();
  const allTeams = useSelector(state => state.allTeams);
  const [state, setState] = useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    birthDate: "",
    teams: []
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    birthDate: "",
    teams: []
  });

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === 'teams') {
      const selectedTeam = value.trim();
      setState((prevState) => ({
        ...prevState,
        teams: [...prevState.teams, selectedTeam],
      }));
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldErrors = validate(state);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length === 0) {
      dispatch(postDriver(state));
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label}>NAME</label>
        <input onChange={handleChange} className={style.input} type="text" name="name" placeholder="Only letters and spaces" />
        {errors.name && <p className={style.error}>{errors.name}</p>}

        <label className={style.label}>LAST NAME</label>
        <input onChange={handleChange} className={style.input} type="text" name="lastName" placeholder="Only letters and spaces" />
        {errors.lastName && <p className={style.error}>{errors.lastName}</p>}

        <label className={style.label}>IMAGE</label>
        <input onChange={handleChange} className={style.input} type="text" name="image" placeholder="Image (URL)" />
        {errors.image && <p className={style.error}>{errors.image}</p>}

        <label className={style.label}>DESCRIPTION</label>
        <input onChange={handleChange} className={style.input} type="text" name="description" placeholder="Description (max 2000 characters)" />
        {errors.description && <p className={style.error}>{errors.description}</p>}

        <label className={style.label}>NATIONALITY</label>
        <input onChange={handleChange} className={style.input} type="text" name="nationality" placeholder="Nationality" />
        {errors.nationality && <p className={style.error}>{errors.nationality}</p>}

        <label className={style.label}>BIRTH DATE</label>
        <input onChange={handleChange} className={style.input} type="date" name="birthDate" />
        {errors.birthDate && <p className={style.error}>{errors.birthDate}</p>}

        <div>
          <label className={style.label}>TEAM</label>
          <select onChange={handleChange} className={style.select} name="teams" id="teams" placeholder='Select a team/s'>
            {allTeams.map((team, index) => (
              <option key={index} value={team}>{team}</option>
            ))}
            <option value="">Select a team</option>
          </select>
          {errors.teams && <p className={style.error}>{errors.teams}</p>}
        </div>
          <button className="submit" type="submit">
            Create driver
          </button>
        </form>
    </div>
  );
};

export default CreateForm;