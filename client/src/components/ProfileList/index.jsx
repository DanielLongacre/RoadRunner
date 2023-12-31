import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>Log in to see your runs</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.runs ? profile.runs.length : 0}{' '}
                    runs logged
                    {profile.runs && profile.runs.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View their runs.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
