import React from "react";
import "./jobPostDetail.css";
export default function JobPostDetail() {
  return (
    <div className="jobPostDetail">
      <div className="jobPostDetail-header">
        <h1>İlan Adı</h1>
        <button>Başvur</button>
      </div>
      <h4>İş Pozisyon Adı</h4>
      <h4>İş veren Adı</h4>
      <h4>İş veren email</h4>
      <h4>İş veren numarası</h4>

      <div className="job-description">
        <div className="job-description-header">İş Tanımı</div>
        <div className="job-description-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
          vero consequuntur temporibus, tenetur soluta itaque dolorum quia
          dolorem eius cupiditate harum porro, mollitia quos debitis velit
          fugiat ipsa, accusantium repellat natus dolor ex est in perferendis.
          Explicabo blanditiis corrupti dicta voluptate necessitatibus possimus
          vero numquam error reprehenderit beatae dolore assumenda atque
          dolorem, ad quae impedit ullam sint quasi inventore enim nobis harum
          consectetur. Aut consequatur id quam molestiae hic minus, reiciendis
          error eaque? Ex dignissimos ipsam earum tenetur, nostrum alias magnam
          perspiciatis omnis dolores voluptates quos. At minus fuga
          exercitationem voluptatibus hic, earum quam illo itaque voluptas dicta
          fugiat ipsa, accusantium repellat natus dolor ex est in perferendis.
          Explicabo blanditiis corrupti dicta voluptate necessitatibus possimus
          vero numquam error reprehenderit beatae dolore assumenda atque
          dolorem, ad quae impedit ullam sint quasi inventore enim nobis harum
          consectetur. Aut consequatur id quam molestiae hic minus, reiciendis
          error eaque? Ex dignissimos ipsam earum tenetur, nostrum alias magnam
          perspiciatis omnis dolores voluptates quos. At minus fuga
          exercitationem voluptatibus hic, earum quam illo itaque voluptas dicta
          iste?
        </div>
      </div>
      <div className="job-requirements">
        <div className="job-requirements-header">İş Tanımı</div>
        <div className="job-requirements-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
          vero consequuntur temporibus, tenetur soluta itaque dolorum quia
          dolorem eius cupiditate harum porro, mollitia quos debitis velit
          fugiat ipsa, accusantium repellat natus dolor ex est in perferendis.
          Explicabo blanditiis corrupti dicta voluptate necessitatibus pssimos ipsam earum tenetur, nostrum alias magnam
          perspiciatis omnis dolores voluptates quos. At minus fuga
          exercitationem voluptatibus hic, earum quam illo itaque voluptas dicta
          iste? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          sequi vero consequuntur temporibus, tenetur soluta itaque dolorum quia
          dolorem eius cupiditate harum porro, mollitia quos debitis velit
          fugiat ipsa, accusantium repellat natus dolor ex est in perferendis.
          Explicabo blanditiis corrupti dicta voluptate necessitatibus possimus
          vero numquam error reprehenderit beatae dolore assumenda atque
          dolorem, ad quae impedit ullam sint quasi inventore enim nobis harum
          consectetur. Aut consequatur id quam molestiae hic minus, reiciendis
          error eaque? Ex dignissimos ipsam earum tenetur, nostrum alias magnam
          perspiciatis omnis dolores voluptates quos. At minus fuga
          exercitationem voluptatibus hic, earum quam illo itaque voluptas dicta
          iste?
        </div>
      </div>
      <div className="job-requirements">
        <div className="job-requirements-header">İş Tanımı</div>
        <div className="job-requirements-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
          vero consequuntur temporibus, tenetur soluta itaque dolorum quia
          dolorem eius cupiditate harum porro, mollitia quos debitis velit
          fugiat ipsa, accusantium repellat natus dolor ex est in perferendis.
          Explicabo blanditiis corrupti dicta voluptate necessitatibus possimus
          vero numquam error reprehenderit beatae dolore assumenda atque
          dolorem, ad quae impedit ullam sint quasi inventore enim nobis harum
          consectetur. Aut consequatur id quam molestiae hic minus, reiciendis
          error eaque? Ex dignissimos ipsam earum tenetur, nostrum alias magnam
          perspiciatis omnis dolores voluptates quos. At minus fuga
          exercitationem voluptatibus hic, earum quam illo itaque voluptas dicta
          iste? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          sequi vero consequuntur temporibus, tenetur soluta itaque dolorum quia
          dolorem eius cupiditate harum porro, mollitia quos debitis velit
          fugiat ipsa, accusantium repellat natus dolor ex est in perferendis.
          Explicabo blanditiis corrupti dicta voluptate necessitatibus possimus
          vero numquam error reprehenderit beatae dolore assumenda atque
          dolorem, ad quae impedit ullam sint quasi inventore enim nobis harum
          consectetur. Aut consequatur id quam molestiae hic minus, reiciendis
          error eaque? Ex dignissimos ipsam earum tenetur, nostrum alias magnam
          perspiciatis omnis dolores voluptates quos. At minus fuga
          exercitationem voluptatibus hic, earum quam illo itaque voluptas dicta
          iste?
        </div>
      </div>
      <div className="city">Şehir : Ankara</div>
      <div className="salary">
        <span className="min">Maaş Aralığı : 1000</span> -{" "}
        <span className="max">5.000</span>
      </div>
      <div className="open-position-amount">Açık Pozisyon Adeti : 5</div>
      <div className="last-apply-date">Son Başvuru Tarihi : 12.10.2022</div>
    </div>
  );
}
