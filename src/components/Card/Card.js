function Card(props) {
  const { children } = props;
  return (
    <div className="py-3 m-5 w-full max-w-screen-xl lg:flex flex-row bg-gray-200 rounded-md shadow">
      {children}
    </div>
  );
}

export default Card;
