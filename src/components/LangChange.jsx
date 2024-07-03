import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LangChange() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='w-[40rem] flex gap-4 justify-end'>
      <button onClick={() => handleChangeLanguage('en')}>
        <img className='w-12 h-12' src="/en.png" alt="English" />
      </button> 
      <button onClick={() => handleChangeLanguage('es')}>
        <img className='w-12 h-12' src="/es.png" alt="Spanish" />
      </button>
      <button onClick={() => handleChangeLanguage('ca')}>
        <img className='w-12 h-12' src="/cat.png" alt="Catalan" />
      </button>
    </div>
  );
}
