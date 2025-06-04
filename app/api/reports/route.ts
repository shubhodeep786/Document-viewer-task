import { NextResponse } from 'next/server';

const reports = [
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '23.07.2021', time: '12:30 PM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' },
  { date: '24.07.2021', time: '09:15 AM', name: 'APP_URL_USAGE_3_6_2021_31_3_2021.csv' }
];

export async function GET() {
  return NextResponse.json(reports);
}
