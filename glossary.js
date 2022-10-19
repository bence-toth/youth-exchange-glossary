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
]

const language = "en"

document.getElementById("glossary-wrapper").innerHTML = glossary
    .sort((a, b) => a.term[language] < b.term[language])
    .map(item => `
        <dd>${item.term[language]}</dd>
        <dt>${item.description[language]}</dt>
    `)