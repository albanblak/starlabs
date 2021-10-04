import { BsSearch, ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/all";

const Header = ({
  setDisplayData,
  data,
  setDescTrue,
  setAscTrue,
  sort,
}) => {
  const logoUrl =
    "https://starlabs.dev/wp-content/themes/mod-parent/assets/images/logo.png";

  const searchHandler = (e) => {
    const keyword = e.target.value;
        if(data){
            if (keyword !== "") {
                const results = data.filter((team) => {
                    return team["team-full"].toLowerCase().includes(keyword.toLowerCase());
                });
                if (sort === 'asc') {
                    setDisplayData(
                        results.sort((a, b) => a["team-full"].localeCompare(b["team-full"]))
                    );
                } else if(sort === 'dsc') {
                    setDisplayData(
                        results.sort((a, b) => b["team-full"].localeCompare(a["team-full"]))
                    );
                }
                else {
                    setDisplayData(results)
                }
            } else {
                setDisplayData(data);
            }
        }

  };

  return (
    <div className={"header"}>
      <div className={"logo"}>
          <a href={'/'}>
              <img alt={"logo"} src={logoUrl}  />
          </a>
      </div>

      <div className={"search"}>
        <div className={"searchIcon"}>
          <BsSearch />
        </div>
        <input onChange={searchHandler} type={"text"} />

      </div>

      <div className={"buttons"}>
        <div
          className={sort === 'asc' ? "active Btn" : "Btn"}
          onClick={setAscTrue}
        >
          <ImSortAlphaAsc />
          <p>ASC</p>
        </div>
        <div onClick={setDescTrue} className={sort ==='dsc' ? "active Btn" : "Btn"}>
          <ImSortAlphaDesc />
          <p>DSC</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
