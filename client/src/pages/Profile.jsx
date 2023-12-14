import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RUN } from '../utils/mutations';
import { REMOVE_RUN } from '../utils/mutations';

import RunForm from '../components/RunForm';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {

  const [addRun, { error }] = useMutation(ADD_RUN);
  const [deleteRun, { mistake }] = useMutation(REMOVE_RUN);
  
  const addRunToProfile = async (run) => {
    
    try {
      const profileId = run.profileId
      const distance = parseInt(run.distance)
      const time = parseInt(run.time)
      console.log(profileId + distance + time);
      const {data} = await addRun({
        variables: { profileId, distance, time },
      });
      console.log(data);
      
    } catch (err) {
      console.error(err);
    }
  };

  const deleteRunFromProfile = async (run) => {
    const runId = run._id;
    const data = await deleteRun({
      variable: { profileId, runId}
    });
    console.log(data);
  };

  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });
  console.log(data);
  const profile = data?.profile || {};
  const runs = profile.runs;
  console.log(profile);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {profile.name}, here are all of your runs
      </h2>
    
      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <RunForm profileId={profile._id} addRunToProfile={addRunToProfile} />
        
        <div className="flex-row justify-space-between my-4">
          {runs &&
            runs.map((run, index) => (
              <div key={index} className="col-12 col-xl-8">
                <div className="card mb-3">
                  <h4 className="card-header bg-light text-dark p-2 m-0">
                    Date: {run.date}
                  </h4>
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    Distance: {run.distance} miles / Time: {run.time} minutes
                    <button className="bg-danger text-light ml-5" onSubmit={deleteRunFromProfile}>
                      Delete
                    </button>
                  </h4>
                </div>
              </div> 
          ))} 
        </div>
        
      </div>

  
    </div>
  );
};

export default Profile;
