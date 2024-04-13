import React from 'react';
import { useForm, Controller } from "react-hook-form";

// components
import TextField from './components/TextField';
import SelectField from './components/SelectField';
import ControllerTextField from './components/ControllerTextField';
import Button from './components/Button';
import ButtonPagination from './components/ButtonPagination';

function App() {
  const [users, setUsers] = React.useState([]);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const user = {
      id: Math.floor(Math.random() * 1000),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role:  data.role,
    }
    setUsers(prevState => {
      return [...prevState, user]
    })
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 ">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
          <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-3">
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <ControllerTextField 
                            type="text" 
                            name="firstName" 
                            label="First Name" 
                            {...field}
                          />
                        )}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <TextField 
                        type="text" 
                        name="lastName" 
                        label="Last Name" 
                        register={register}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <ControllerTextField 
                            type="text" 
                            name="email" 
                            label="Email" 
                            {...field}
                            {...register("email", {
                              required: true,
                              minLength: {
                                value: 10,
                                message: 'This field is required'
                              },
                              pattern: {
                                value: /\b[A-Z0-9._%+-]+@gmail\.com\b/i,
                                message: "Email must end with @gmail.com"
                              }
                            })}
                          />
                        )}
                      />
                      <p className='text-red-600 my-2'>
                        {errors?.minLength?.message}
                        {errors?.email?.message}
                      </p>
                    </div>

                    <div className="md:col-span-5">
                      <SelectField 
                        name="role"
                        label="Role"
                        options={[
                          { label: 'Admin', value: 'admin' },
                          { label: 'Member', value: 'member' },
                          { label: 'Manager', value: 'manager' }
                        ]}
                        {...register("role")}
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <Button 
                          type="submit"
                          text="Submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                  </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr className="odd:bg-white  even:bg-gray-50 border-b ">
                    <td className="px-6 py-4 text-center" colSpan="6">
                      No data
                    </td>
                  </tr>
                ) : (
                  <>
                    {users.map(user => {
                      return (
                        <tr key={user.id} className="odd:bg-white  even:bg-gray-50 border-b ">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {user.firstName}
                          </th>
                          <td className="px-6 py-4">
                            {user.lastName}
                          </td>
                          <td className="px-6 py-4">
                            {user.email}
                          </td>
                          <td className="px-6 py-4">
                            {user.role}
                          </td>
                          <td className="px-6 py-4 flex items-center">
                            <div className="font-medium text-blue-600 cursor-pointer mr-4">Edit</div>
                            <div className="font-medium text-red-600 cursor-pointer">Delete</div>
                          </td>
                        </tr>
                      )
                    })}
                  </>
                  
                )}
              </tbody>
          </table>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto">
        <div className="flex items-center justify-end mt-4">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing {' '}
            {users.length > 10 && (
              <>
                <span className="font-semibold text-gray-900">1</span> 
                {' '} to {' '}
                <span className="font-semibold text-gray-900">10</span> 
                {' '} of {' '}
              </>
            )}
              <span className="font-semibold text-gray-900">{users.length}</span> 
              {' '} Entries
          </span>
          <div className="inline-flex xs:mt-0 ml-2">
            <ButtonPagination 
              className="rounded-s" 
              onClick={() => console.log('prev')}
            >
              <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              Prev
            </ButtonPagination>
            <ButtonPagination 
              className="rounded-e border-0 border-s border-gray-700"
              onClick={() => console.log('next')}
            >
              Next
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </ButtonPagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
