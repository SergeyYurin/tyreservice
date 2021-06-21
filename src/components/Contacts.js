import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

/* eslint-disable */

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = 'service_ID1';

  const templateID = 'template_ID';

  const userID = 'user_9ioOXoLGkX2NTLcAXbSV6';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id='contactUs' className='contacts'>
      <div className='text-center'>
        <h1>связаться с нами</h1>
        <p>
          Опишите свою просьбу или предложение о работе с нами, и мы
          свяжемся с вами максимально быстро.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/*Name input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Имя'
                  name='name'
                  aria-invalid={errors.name ? 'true' : 'false'}
                  {...register('name', {
                    required: 'Пожалуйста, укажите свое имя',
                    maxLength: {
                      value: 20,
                      message: 'Имя должно быть не более 20 символов',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              {/*Phone input*/}
              <div className='text-center'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Формат номера телефона: 1234567890'
                  name='phone'
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  {...register('phone', {
                    required:
                      'Пожалуйста добавьте Ваш номер телефона',
                    pattern: {
                      value: /^[0-9]{3}[0-9]{3}[0-9]{4}/i,
                      message: 'Неверный формат номера телефона',
                    },
                  })}
                />

                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>
              {/*Email input*/}
              <div className='text-center'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email', {
                    required:
                      'Пожалуйста укажите свою электронную почту',
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message:
                        'некорректно введенная электронная почта',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/*Subject input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Субъект'
                  name='subject'
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  {...register('subject', {
                    required:
                      'Пожалуйста укажите субъект своего обращения',
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/*Description*/}
              <div className='text-center'>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Опишите свое обращение'
                  name='description'
                  aria-invalid={errors.description ? 'true' : 'false'}
                  {...register('description', {
                    required:
                      'Пожалуйста опишите свое обращение или просьбу',
                  })}
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
            </div>
            <div>
              <button
                className='btn-main-offer contact-btn'
                type='submit'
              >
                отправить обращение
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
