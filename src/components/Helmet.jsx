const Helmet = (props) => {
  document.title =
    "  CELESTIAL CHURCH  OF CHRIST STUDENT PARISH - " + props.title;
  return (
    <>
      <div className="w-100">{props.children}</div>
    </>
  );
};

export default Helmet;
