import axios from "axios";
import { useEffect, useState } from "react";

const PilotList = ({ pilots }) => {
  const [pilotsList, setPilotsList] = useState(null);

  useEffect(() => {
    const getPilots = async () => {
      const pilotNames = await Promise.all(
        pilots.map(async (pilot) => {
          console.log("fetching pilot name");
          let response = await axios.get(pilot);
          return response.data.name;
        })
      );
      setPilotsList([pilotNames]);
    };
    getPilots();
  }, []);

  if (pilots.length == 0) {
    return <>No Pilots</>;
  } else if (!pilotsList) {
    return <>Loading...</>;
  } else {
    return <>{pilotsList.toString()}</>;
  }
};

export default PilotList;
