import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { ADD_RUN } from '../utils/mutations';
import { REMOVE_RUN } from '../utils/mutations';

import RunForm from '../components/RunForm';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {

  const [addRun, { error }] = useMutation(ADD_RUN);
  const [removeRun, { mistake }] = useMutation(REMOVE_RUN, {
    refetchQueries: [{query:QUERY_SINGLE_PROFILE}]
  });
  
  const addRunToProfile = async (run) => {
    console.log(run);
    try {
      const profileId = run.profileId
      console.log(profileId);
      const distance = parseInt(run.distance)
      const time = parseInt(run.time)
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
    const profileId = profile._id;
    console.log(profileId)
    console.log(runId);
    const data = await removeRun({
      variables: { profileId, runId}
    });
    console.log(data);
    window.location.reload();
  };

  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });
  
  const profile = data?.profile || {};
  const runs = profile.runs;
  
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
        <br /><br /><br />
        <h3>Logged Runs:</h3>
        <div className="flex-row justify-space-between my-4">
          {runs &&
            runs.map((run, index) => (
              <div key={index} className="col-12 col-xl-8">
                <div className="card mb-3">
                  <h4 className="card-header bg-light text-dark p-2 m-0">
                    Date: {run.date}
                  </h4>
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    Distance: {run.distance} miles <br/> Time: {run.time} minutes <br/> Miles Per Minute: {run.time/run.distance}
                    <button className="bg-danger text-light ml-5" onClick={() => deleteRunFromProfile(run)}>
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
