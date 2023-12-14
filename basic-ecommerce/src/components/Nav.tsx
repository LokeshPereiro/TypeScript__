type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const handleView = (): void => {
    setViewCart(!viewCart);
  };

  return (
    <div className="d-flex justify-content-end">
      <button className="nav btn btn-outline-info p-2" onClick={handleView}>
        {viewCart ? "View Products" : "View Cart"}
      </button>
    </div>
  );
};

export default Nav;
