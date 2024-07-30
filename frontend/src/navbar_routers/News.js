import { useOutletContext } from "react-router-dom";

export default function News() {
  const [outletContextObj] = useOutletContext();
  const currentNews = outletContextObj['currentNews'][0];

  return(<>
    <div>{currentNews}</div>
  </>)

}