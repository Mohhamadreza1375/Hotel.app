import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">HotelHub Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">Total Rooms: 50</div>
        <div className="bg-white p-4 rounded-2xl shadow">Occupied: 23</div>
        <div className="bg-white p-4 rounded-2xl shadow">Total Revenue: $12,300</div>
        <div className="bg-white p-4 rounded-2xl shadow">Reservations Today: 5</div>
      </div>
    </div>
  );
};

export default Dashboard;
