import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";

import "./App.css";

function App() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    () => {
      return axios.post("http://localhost:8080/fake-post");
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("courses");
      },
    }
  );

  console.log(isLoading);

  return (
    <div>
      <button onClick={() => mutate()}>
        {isLoading ? "Creating..." : "Created"}
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ backgroundColor: "#f4f4f4" }}>
          <ComponentA />
        </div>
        <div style={{ backgroundColor: "#cccccc" }}>
          <ComponentB />
        </div>
      </div>
    </div>
  );
}

export default App;
