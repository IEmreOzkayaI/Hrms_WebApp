import React from "react";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar " id="sidebar">
      <div className="sidebar-content">
        <form action="">
            <select id="cities" name="cities">
              <option value="ankara">Bir Şehir Seçiniz</option>
              <option value="ankara">Ankara</option>
              <option value="istanbul">İstanbul</option>
              <option value="izmir">İzmir</option>
            </select>

            <select id="job-positions" name="job-positions">
              <option value="java-developer">Bir İş Pozisyonu Seçiniz</option>
              <option value="java-developer">Java Developer</option>
              <option value=".net-developer">.Net Developer</option>
              <option value="devOps-developer">DevOps Developer</option>
            </select>
            <input
              type="text"
              name="min-salary"
              id="min-salary"
              placeholder="Min Maaş"
            />
            <input
              type="text"
              name="max-salary"
              id="max-salary"
              placeholder="Max Maaş"
            />
            <select id="finish-date" name="finish-date">
              <option value="from-new">En Yeni İlandan</option>
              <option value="from-old">En Eski İlandan</option>
            </select>
            {/* <input
              type="search"
              name="search"
              id="search"
              placeholder="İlan Adı İle Arama"
            /> */}
          <button type="submit">&#10004; </button>
        </form>
      </div>
    </div>
  );
}
