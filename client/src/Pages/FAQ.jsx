import React, { useState } from 'react';
import faqData from './faqData';
import "./Faq.css";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleFAQ = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="faq-container">
      <h2 className='faq'>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className={`faq-item ${isOpen[index] ? 'open' : ''}`}>
          <h3 className='faq-ques' onClick={() => toggleFAQ(index)}>{faq.question}</h3>
          {isOpen[index] && <p className='faq-ans'>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;