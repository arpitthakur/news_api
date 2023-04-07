export default function Images({ src }) {
  const replaceImgWithError = (e) => {
    e.target.onerror = null;
    e.target.src = "http://placekitten.com/g/200/300";
  };

  const hideImgWhenError = (e) => {
    e.target.onerror = null;
    e.target.style.display = "none";
  };

  return (
    <>
      {/* <p>hi</p>
      <img
        onError={replaceImgWithError}
        alt="foo"
        src=


      /> */}
      <img
        onError={hideImgWhenError}
        alt="foo"
        src={
          src
            ? src
            : "https://crablets-event-images.s3.amazonaws.com/users/10/top"
        }
        className="card-image"
      />
    </>
  );
}
