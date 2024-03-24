import React, { useState } from 'react';
import { Container, Button, Form, Table } from 'react-bootstrap';

const initialForm = {
  name: '',
  email: '',
  city: 'HCM',
  password: '',
  confirmPassword: '',
};

const initialValue = [
  {
    id: Math.floor(Math.random() * 1000),
    fullName: 'tony nguyen',
    email: 'tony@gmail.com',
    address: 'dien bien phu',
    city: 'hcm',
    country: 'vn',
  },
  {
    id: Math.floor(Math.random() * 1000),
    fullName: 'tony hau',
    email: 'tony@gmail.com',
    address: 'dien bien phu',
    city: 'hcm',
    country: 'vn',
  }
]

function App() {
  const [users, setUsers] = React.useState(initialValue);
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
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="country">Country / region</label>
                    <select id="countries" defaultValue="DEFAULT" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="DEFAULT">Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>

                </div>
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
                      Full name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Country
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
                            {user.fullName}
                          </th>
                          <td className="px-6 py-4">
                            {user.email}
                          </td>
                          <td className="px-6 py-4">
                            {user.address}
                          </td>
                          <td className="px-6 py-4">
                            {user.city}
                          </td>
                          <td className="px-6 py-4">
                            {user.country}
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
    </div>
  );
}

export default App;
