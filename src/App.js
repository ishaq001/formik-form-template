/** @format */

import './App.css';
import { FormikContainer } from './components/FormikContainer';
import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
// import { GoogleForm } from './components/GoogleForm';
// import { YoutubeForm } from './components/YoutubeForm';

function App() {
  return (
    <div className="App">
      {/* different forms for testing purposes using formik. uncomment each of the component if you wish to test its functionality */}
      {/* <YoutubeForm />      */}
      {/* <GoogleForm /> */}
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      <RegistrationForm />
    </div>
  );
}

export default App;
