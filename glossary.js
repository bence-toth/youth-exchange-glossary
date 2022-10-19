const glossary = [
    {
        term: {
            en: "gender identity",
            pt: "identidade de género"
        },
        description: {
            en: "something about gender identity",
            pt: "something about gender identity but in portuguese"
        }
    }
];

const languages = [
    {name: "English", code: "en"},
    {name: "Portuguese", code: "pt"}
];

document.getElementById("language-switcher").innerHTML = languages.map(language => `
    <li>
        <a href="./?language=${language.code}">${language.name}</a>
    </li>
`).join("");

const defaultLanguage = "en";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const language = urlParams.get('language') || defaultLanguage;

document.getElementById("glossary-wrapper").innerHTML = glossary
    .sort((a, b) => a.term[language] < b.term[language])
    .map(item => `
        <dd>${item.term[language]}</dd>
        <dt>${item.description[language]}</dt>
    `)
    .join("");