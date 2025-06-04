"use client";
import { useState, useEffect, FC } from 'react';
import styles from './styles/Home.module.css';
import ReportsList from './components/ReportsList';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';

type Report = {
  date: string;
  time: string;
  name: string;
};


/**
 * Load reports from the API.
 */

const Home: FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_REPORTS_API_URL || '/api/reports');
        if (!response.ok) throw new Error('Failed to fetch reports');
        const data = await response.json();
        setReports(data);
      } catch (err) {
        setError('Failed to load reports');
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const indexOfLastReport: number = currentPage * itemsPerPage;
  const indexOfFirstReport: number = indexOfLastReport - itemsPerPage;
  const currentReports: Report[] = reports.slice(indexOfFirstReport, indexOfLastReport);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <ReportsList reports={currentReports} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={reports.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;