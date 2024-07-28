import React from 'react';
import "./signInPage.css"
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div><SignIn path="/sign-in" /></div>
  )
}

export default SignInPage