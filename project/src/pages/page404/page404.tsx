import { Link } from 'react-router-dom';

function Page404() {
  return (
    <>
      <h1>
        404. <br /> Page not found
      </h1>
      <Link to="/">Back to main Page</Link>
    </>
  );
}
export default Page404;
