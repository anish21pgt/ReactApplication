import LoadingImage from '../images/loading.gif'

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <img src={LoadingImage} alt="Loading" />
      </div>
    </>
  );
};

export default Loading;
