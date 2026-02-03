import "../styles/python.css";
function PythonComponent() {
  return (
    <>
      <img
        src="/python.png"
        className="sm:h-12 -translate-x-px top-1/2 left-1/2 -translate-1/2 md:h-14 opacity-0"
      />
      {/* <img
        src="/python.png"
        className="sm:h-12 -translate-x-px top-1/2 left-1/2 -translate-1/2 md:h-14 python-img"
      /> */}
      <img
        src="/python.png"
        className="h-12 absolute md:h-14  top-1/2 left-1/2 -translate-1/2 z-10 python-img"
      />
      <img
        src="/python.png"
        className="h-12 absolute md:h-14  top-1/2 left-1/2 -translate-1/2 z-10 python-img-2"
      />
    </>
  );
}

export default PythonComponent;
