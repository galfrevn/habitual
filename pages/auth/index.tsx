import Image from "next/image";

import { GetServerSidePropsContext } from "next";
import { getServerSideSession } from "lib/server/server-session";

import { AuthenticationButton } from "components/auth/button";
import { motion } from "framer-motion";

const Authentication = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <motion.div
            key="login-icon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            <Image
              quality={100}
              className="mx-auto"
              src="/images/avatar.png"
              alt="Habits"
              width={80}
              height={80}
            />
          </motion.div>
          {/* <motion.h2
            key='login-h2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className='mt-6 text-center text-3xl font-bold tracking-tight text-neutral-800 dark:text-white'
          >
            Sign in to your account
          </motion.h2>
          <motion.p
            key='login-p'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
            className='mt-2 text-center text-sm text-gray-600'
          >
            Or{' '}
            <span className='font-medium text-indigo-600 hover:text-indigo-500'>
              start your 14-day free trial
            </span>
          </motion.p> */}
        </div>
        {/* <div className='mt-8 space-y-6'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <motion.div
              key='login-email-input'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            >
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Email address'
              />
            </motion.div>
            <motion.div
              key='login-password-input'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
            >
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Password'
              />
            </motion.div>
          </div> */}

        {/* <div className='flex items-center justify-between'>
            <motion.div
              key='login-remember-input'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
              className='flex items-center'
            >
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'
              >
                Remember me
              </label>
            </motion.div>

            <motion.div
              key='login-forgot-input'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              className='text-sm'
            >
              <span className='font-medium text-indigo-600 hover:text-indigo-500'>
                Forgot your password?
              </span>
            </motion.div>
          </div> */}

        <div className="flex flex-col gap-2">
          {/* <motion.button
              key='login-signin-input'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.55 } }}
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Sign in
            </motion.button> */}

          <motion.div
            key="login-github-input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
          >
            <AuthenticationButton
              authenticationProviderBgColor="#000"
              authenticationProviderLabel="GitHub"
              authenticationProviderName="github"
              authenticationProviderTextColor="#FFF"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSideSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
