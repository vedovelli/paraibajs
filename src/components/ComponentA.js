import axios from "axios";
import { useQuery } from "react-query";

export function ComponentA() {
  const { data, isLoading, isError, error } = useQuery("courses", () => {
    return axios.get("http://localhost:8080/fake-get");
  });
  return (
    <div>
      {isLoading ? <p>Carregando...</p> : null}
      {isError ? <p>{error.message}</p> : null}
      {data?.data.map((course) => {
        return <p key={course.id}>{course.title}</p>;
      })}
    </div>
  );
}
