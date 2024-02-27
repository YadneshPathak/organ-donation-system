import React from "react";

const data = [
  {
    name: "Anom",
    age: 51,
    gender: "Male",
    organ: "Kidney",
    DOB: "16th June 1973",
    Hospital: "Deenanath",
  },
  {
    name: "Megha",
    age: 36,
    gender: "Female",
    organ: "Heart",
    DOB: "10th March 2004",
    Hospital: "Deenanath",
  },
  {
    name: "Mugdha",
    age: 62,
    gender: "Female",
    organ: "Kidney",
    DOB: "1st November 1961",
    Hospital: "Sasoon",
  },
  {
    name: "rakesh",
    age: 52,
    gender: "Male",
    organ: "Kidney",
    DOB: "7th August 1977",
    Hospital: "Sasoon",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-right mb-4 text-2xl font-bold">
          View Applications
        </h1>
        <table className="border border-green-600 w-full table-fixed">
          <thead className="bg-brown-500">
            <tr>
              <th className="border-b border-black py-2 px-4">Name</th>
              <th className="border-b border-black py-2 px-4">Age</th>
              <th className="border-b border-black py-2 px-4">Gender</th>
              <th className="border-b border-black py-2 px-4">Organ</th>
              <th className="border-b border-black py-2 px-4">Date of Birth</th>
              <th className="border-b border-black py-2 px-4">
                Hospital Enquired
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => (
              <tr key={key} className="bg-burlywood">
                <td className="border border-black py-2 px-4">{val.name}</td>
                <td className="border border-black py-2 px-4">{val.age}</td>
                <td className="border border-black py-2 px-4">{val.gender}</td>
                <td className="border border-black py-2 px-4">{val.organ}</td>
                <td className="border border-black py-2 px-4">{val.DOB}</td>
                <td className="border border-black py-2 px-4">
                  {val.Hospital}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
