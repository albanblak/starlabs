import "./App.scss";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { ClipLoader } from "react-spinners";

function App() {
  const { data, loading, error } = useFetch();
  const [dataDisplay, setDataDisplay] = useState([]);
  const [sort, setSort] = useState("neutral");

  const setAsc = () => {
    if (data) {
      setSort("asc");
      setDataDisplay((curr) =>
        curr.sort((a, b) => a["team-full"].localeCompare(b["team-full"]))
      );
    }
  };

  const setDsc = () => {
    if (data) {
      setSort("dsc");
      setDataDisplay((curr) =>
        curr.sort((a, b) => b["team-full"].localeCompare(a["team-full"]))
      );
    }
  };

  useEffect(() => {
    setDataDisplay(data);
  }, [data]);

  return (
    <>
      <Header
        data={data}
        setDisplayData={setDataDisplay}
        setAscTrue={setAsc}
        setDescTrue={setDsc}
        sort={sort}
      />

      <div className={"body"}>
        <div className={"wrapper"}>
            <div className={'error'}>
                {<ClipLoader color={"blue"} loading={loading} size={150} />}
                {error && (
                    <p style={{ margin: "auto" }}>
                        Something went wrong please try again
                    </p>
                )}

            </div>
          {dataDisplay &&
            dataDisplay.map((item) => <Card key={item.id} data={item} />)}
        </div>
      </div>
    </>
  );
}

export default App;
