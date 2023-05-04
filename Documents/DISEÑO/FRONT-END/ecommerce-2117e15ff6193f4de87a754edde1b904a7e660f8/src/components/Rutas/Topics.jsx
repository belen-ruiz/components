import { useParams } from "react-router-dom";

export const Topic1 = () => {
    let { topic } = useParams();
  
    return (
      <div>
        <h4>{topic}</h4>
      </div>
    );
  };