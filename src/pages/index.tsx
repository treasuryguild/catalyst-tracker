import { useEffect, useState } from 'react';
import projects from '../config/projects.json'; // Import the user-editable config

type Project = {
  project_id: string;
  wallet_address: string;
};

type ChartData = {
  projectId: string;
  data: any; 
};

export default function Home() {
  const [charts, setCharts] = useState<ChartData[]>([]);

  // Fetch data for each project and generate charts
  useEffect(() => {
    const fetchChartData = async () => {
      const chartData = await Promise.all(
        projects.projects.map(async (project: Project) => {
          const response = await fetch(`/api/fetchData?wallet=${project}`);
          const data = await response.json();
          return { projectId: project.project_id, data };
        })
      );
      setCharts(chartData);
    };

    fetchChartData();
  }, []);

  return (
    <div className="home-container">
      <h1>Project Dashboard</h1>
      {charts.map((chart) => (
        <div key={chart.projectId} className="chart-container">
          <h2>{chart.projectId}</h2>
          {/* Render charts or data here */}
          <pre>{JSON.stringify(chart.data, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}