import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Select, SelectItem } from "@nextui-org/react";
import { SORTING_OPTIONS } from '../constants/index'
import { FileService } from '../services/files'
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const files = await FileService.getFiles();
  return { props: { files } }
}
export default function Index({ files: initialFiles = [] }) {
  const [files, setFiles] = useState(initialFiles);
  const [sorting, setSorting] = useState(null);

  const handleSorting = async (event) => {
    const value = event.target.value;
    setSorting(value);
    const files = await FileService.getFiles(value);
    setFiles(files);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title className="text-3xl">Files List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-5 flex flex-col justify-center items-center'>
        <Select
          label="Select sorting option"
          className="max-w-xs"
          value={sorting}
          onChange={handleSorting}
        >
          {SORTING_OPTIONS.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </Select>
        <div className={styles.grid}>
          {files.map(({ fileName, createdAt }, index) => {
            return <div key={`file-${index}`} className={styles.card}>
              <h3>{fileName}</h3>
              <p>{createdAt}</p>
            </div>
          })}

        </div>
      </main>
    </div>
  );
}
