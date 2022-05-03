import { Title } from '../titles-section';
import React, { useEffect, useState } from 'react';
import { Awards } from '../../constants/data';
import { FaMedal, FaModx } from 'react-icons/fa';
import { GiTrophyCup } from 'react-icons/gi';
import award from '../../images/awardimg.png';
export const Award = () => {
  const awards = { ...Awards };
  return (
    <section className="awards">
      <Title title={awards.name} about={awards.about} />
      <div className="cards container">
        <div className="row text-white">
          <div className="col-lg-4 col-md-6 col-sm-6 text-center justify-content-center px-5">
            <div className="icons">
              <FaModx className="icons-size mb-4 text-danger" />
              <h2> برگزیده کیفی</h2>
              <p className="my-4 description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز{' '}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 text-center justify-content-center px-5">
            <div className="icons">
              <GiTrophyCup className="icons-size mb-4 text-success" />
              <h2> قهرمانی ها</h2>
              <p className="my-4 description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز{' '}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 text-center justify-content-center px-5">
            <div className="icons">
              <FaMedal className="icons-size mb-4 text-warning" />
              <h2>مدال ها</h2>
              <p className="my-4 description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 left-side">
            <img src={award} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 right-side d-flex justify-content-center align-items-center  text-end text-light">
            <div className="">
              <h2>با کیفیت ترین تجهیزات</h2>
              <p className="mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
