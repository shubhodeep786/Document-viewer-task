import React, { FC } from 'react';
import styles from '../styles/Home.module.css'; 

type Report = {
  date: string;
  time: string;
  name: string;
};

type ReportsListProps = {
  reports: Report[];
};

/**
 * Renders a list of reports.
 *
 * @component
 * @param {ReportsListProps} props - The component props.
 * @param {Report[]} props.reports - The array of reports to be displayed.
 * @returns {JSX.Element} The rendered ReportsList component.
 */
const ReportsList: FC<ReportsListProps> = ({ reports }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Report Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={`${report.date}-${report.time}-${index}`}>
              <td>{report.date}</td>
              <td>{report.time}</td>
              <td className={styles.reportName}>{report.name}</td>
              <td><button className={styles.reportDownload}>Download</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsList;
