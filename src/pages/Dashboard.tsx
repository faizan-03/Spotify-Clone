import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ChartBarIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  activeUsers: number;
}

interface ChartData {
  labels: string[];
  values: number[];
}

export const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data
        setStats({
          totalUsers: 1234,
          totalRevenue: 45678,
          activeUsers: 890
        });

        setChartData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          values: [30, 45, 35, 50, 40]
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-white rounded-lg shadow p-6">
          {loading ? (
            <Skeleton height={100} />
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
                <UserGroupIcon className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats?.totalUsers.toLocaleString()}</p>
              <p className="text-sm text-gray-500">+12% from last month</p>
            </div>
          )}
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-lg shadow p-6">
          {loading ? (
            <Skeleton height={100} />
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Total Revenue</h3>
                <CurrencyDollarIcon className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                ${stats?.totalRevenue.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">+8% from last month</p>
            </div>
          )}
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-lg shadow p-6">
          {loading ? (
            <Skeleton height={100} />
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Active Users</h3>
                <ChartBarIcon className="h-8 w-8 text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats?.activeUsers.toLocaleString()}</p>
              <p className="text-sm text-gray-500">+5% from last month</p>
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">User Growth</h3>
        {loading ? (
          <Skeleton height={300} />
        ) : (
          <div className="h-[300px] flex items-end justify-between space-x-2">
            {chartData?.values.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-500 rounded-t"
                  style={{ height: `${value}%` }}
                ></div>
                <span className="text-sm text-gray-500 mt-2">{chartData.labels[index]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 