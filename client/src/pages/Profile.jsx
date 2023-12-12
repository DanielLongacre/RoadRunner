import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import RunsList from '../components/RunsList';
import RunForm from '../components/RunForm';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });
  console.log(data);
  const profile = data?.profile || {};
  console.log(profile);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {profile.name}, here are all of your runs
      </h2>

      {/* {profile.runs?.length > 0 && <RunsList runs={profile.runs} />} */}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <RunForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;
