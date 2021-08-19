import React from 'react';
import outdoor from '../IMG2.jpg';

function AboutUs() {
  return (
    <div id='about' className='container py-5 aboutUs'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img
              className='profile-img'
              src={outdoor}
              alt='outdoor...'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>Миссия компании</h1>
          <p className='about-text'>
            Мы работаем, чтобы сделать ваш автомобильный путь
            комфортным и безопасным, а сервисное и сезонное
            шиномонтажное обслуживание – качественным и доступным!
          </p>

          <p>
            На нашем автосервисе шиномонтаж и балансировка
            производятся на самом современном оборудовании.
            Качественно выполненная балансировка существенно влияет на
            комфорт во время поездки, и что еще не менее важно, на то,
            что хорошо отбалансированные колеса не разбивают детали
            ходовой части автомобиля.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
