import { useContext, useEffect } from "react";
import StateContext from "../../Contexts/StateContext";
import Link from "next/link";

const Navbar = () => {
  const { navbarData, setNavbarData } = useContext(StateContext);

  const fetchData = (url, setData) => {
    fetch(`${url}`).then(response => response.json()).then(response => setData(response))

  };
  useEffect(() => {
    fetchData("http://localhost:3001/navbar", setNavbarData);
  } , []);

  return (
    <div className="row header w-100 justify-content-center">
      <div className="col-md-9">
        <div className="row navbar">
          {navbarData.length !== 0 &&
            navbarData.map((el) => {
              return (
                <div key={el.id} className="col-md-2 nav-item text-center">
                  <Link className="btn nav-links" href={`/${el.href}`}>
                    {el.name}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
