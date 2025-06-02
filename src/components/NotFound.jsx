import { useRouteError } from 'react-router-dom';
function Error() {
  const err=useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops!!</h1>
      <h3>{err.status}</h3>
      <h3>{err.data}</h3>
      <h3>{err.statusText}</h3>
    </>
  );
}

export default NotFound;
