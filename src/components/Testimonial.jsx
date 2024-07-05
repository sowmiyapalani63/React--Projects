import React, { useEffect, useState } from 'react';
import HeadingLayout from './Common/HeadingLayout';
import { handleHeading, handleTestimonialData } from '../api'; 
import { TestimonialCard } from '../components/Common/TestimonialCard';

export const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
   
    setTestimonials(handleTestimonialData);
  }, []);

  return (
    <div className='layout-max-width p-160 mx-auto  padding-md p-sm-60'>
        <div className='container'>
      <div className="row gap-1">
        <HeadingLayout id="4" handleHeading={handleHeading} />
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 col-lg-4 col-sm-12" key={index}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  
  );
};
