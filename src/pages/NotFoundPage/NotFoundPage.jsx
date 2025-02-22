import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

//import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <h2>Page not found</h2>
        <Link to={'/'}>Go to main page</Link>
      </Container>
    </>
  );
};

export default NotFoundPage;
