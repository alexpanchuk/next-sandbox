import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { DateResponse } from "./api/date";

const Home: NextPage = () => {
  const [date, setDate] = useState<DateResponse | null>(null);

  useEffect(() => {
    const timerId = setInterval(async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.json();
      setDate(newDate);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to Next with Typescript!</h1>
        <p className="description">
          To get started, edit the <code>pages/index.js</code> or{" "}
          <code>pages/api/date.js</code> files, then save to reload.
        </p>

        <p className="row date">
          The date is:&nbsp;{" "}
          {date ? (
            <span>
              <b>{date.date}</b>
            </span>
          ) : (
            <span className="loading"></span>
          )}
        </p>

        <div className="row">
          <Card href="https://github.com/zeit/next.js#setup" />
          <Card href="https://github.com/zeit/next.js/tree/master/examples" />
          <Card href="https://github.com/zeit/next.js" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

const Card: React.FC<{ href: string }> = ({ href }) => {
  return (
    <a href={href} className="card" target="blank" rel="noopener noreferrer">
      <h3>Create Next App &rarr;</h3>
      <p>Was this tool helpful? Let us know how we can improve it!</p>

      <style jsx>{`
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </a>
  );
};

export default Home;
