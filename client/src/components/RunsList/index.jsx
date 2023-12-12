const RunsList = ({ runs }) => {
  if (!runs.length) {
    return <h3>No Runs Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {runs &&
          runs.map((run) => (
            <div key={run} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {run} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RunsList;
