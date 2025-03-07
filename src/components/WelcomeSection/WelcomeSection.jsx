import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';

const WelcomeSection = () => {
  return (
    <div>
      <Logo />
      <h2>Welcome section</h2>
      <Link to="/signup">Try tracker</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default WelcomeSection;
