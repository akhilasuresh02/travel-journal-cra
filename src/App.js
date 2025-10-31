import React from "react";
import "./index.css";

const cards = [
  {
    country: "JAPAN",
    title: "Mount Fuji",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    desc:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    img: "https://scrimba.com/links/travel-journal-japan-image-url"
  },
  {
    country: "AUSTRALIA",
    title: "Sydney Opera House",
    dates: "27 May, 2021 - 8 Jun, 2021",
    desc:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    img: "https://scrimba.com/links/travel-journal-australia-image-url"
  },
  {
    country: "NORWAY",
    title: "Geirangerfjord",
    dates: "01 Oct, 2021 - 18 Nov, 2021",
    desc:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    img: "https://scrimba.com/links/travel-journal-norway-image-url"
  }
];

function TravelCard({ item }) {
  return (
    <div className="card">
      <img className="card-img" src={item.img} alt={item.title} />
      <div className="card-content">
        <div className="card-meta">
          <span className="pin">📍</span>
          <span className="country">{item.country}</span>
          <a
            className="maps"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{item.title}</h2>
        <div className="dates">{item.dates}</div>
        <p className="desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page-wrapper">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">🌍 my travel journal.</div>
        </div>
      </header>

      <main className="container">
        {cards.map((c) => (
          <TravelCard key={c.title} item={c} />
        ))}
      </main>
    </div>
  );
}
