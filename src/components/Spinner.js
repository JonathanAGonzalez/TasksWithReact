const Spinner = ({ text, loading }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {loading ? (
        <div className="spinner-border text-info" role="status"></div>
      ) : (
        text
      )}
    </div>
  );
};

export default Spinner;
