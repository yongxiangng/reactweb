function Card(props) {
  const { children, isRow } = props;
  return isRow ? (
    <div className="px-10 py-3 mx-5 my-3 w-full max-w-screen-xl lg:flex flex-row justify-between bg-gray-200 rounded-md shadow">
      {children}
    </div>
  ) : (
    <div className="px-10 py-3 mx-5 my-3 w-full max-w-screen-xl lg:flex flex-col bg-gray-200 rounded-md shadow">
      {children}
    </div>
  );
}

export default Card;
