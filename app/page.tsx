"use client";
import { useState, FC } from 'react';
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
 * Represents an array of report data.
 */
const reportsData: Report[] = [
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
];

const Home: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;

  const indexOfLastReport: number = currentPage * itemsPerPage;
  const indexOfFirstReport: number = indexOfLastReport - itemsPerPage;
  const currentReports: Report[] = reportsData.slice(indexOfFirstReport, indexOfLastReport);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <Navbar />
      <ReportsList reports={currentReports} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={reportsData.length} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default Home;