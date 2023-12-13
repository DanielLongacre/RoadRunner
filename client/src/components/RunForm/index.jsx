import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_RUN } from '../../utils/mutations';

import Auth from '../../utils/auth';

const RunForm = ({ profileId, addRunToProfile }) => {
  const [run, setRun] = useState({
    profileId: profileId,
    distance: 0,
    time: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRun({...run, [name]:value})
  }

  const [addRun, { error }] = useMutation(ADD_RUN);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
    
  //   try {
  //     const profileId = run.profileId
  //     const distance = parseInt(run.distance)
  //     const time = parseInt(run.time)
  //     console.log(profileId + distance + time);
  //     const {data} = await addRun({
  //       variables: { profileId, distance, time },
  //     });
  //     console.log(data);
      
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      <h4>Log more runs below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={ () => addRunToProfile(run) }
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Enter your distance"
              value={run.distance}
              name="distance"
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>

          <div className="col-12 col-lg-9">
            <input
              placeholder="Enter your time"
              value={run.time}
              name="time"
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Log Run
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to log runs. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default RunForm;
