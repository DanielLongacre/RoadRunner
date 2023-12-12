import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_RUN } from '../../utils/mutations';

import Auth from '../../utils/auth';

const RunForm = ({ profileId }) => {
  const [run, setRun] = useState('');

  const [addRun, { error }] = useMutation(ADD_RUN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addRun({
        variables: { profileId, run },
      });

      setRun('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Log more runs below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Log a run..."
              value={run}
              className="form-input w-100"
              onChange={(event) => setRun(event.target.value)}
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
