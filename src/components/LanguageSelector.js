import React, { useState } from "react";
import i18n from "../i18n";

const LanguageSelector = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
      <option value="hi">Hindi</option>
      <option value="en">English</option>
      <option value="it">Italian</option>
    </select>
  );
};

export default LanguageSelector;
