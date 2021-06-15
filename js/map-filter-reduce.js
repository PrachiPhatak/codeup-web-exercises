const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Array of user objects where each user object has at least 3 languages
let userWith3Lang = users.filter(function (user) {
    return user.languages.length >= 3;
});
// console.log(userWith3Lang)

const userEmails = users.map(function (user) {
    return user.email;
});
// console.log(userEmails);

const avg = users.reduce((accumulation, user) => {
    return accumulation + user.yearsOfExperience;
}, 0) / users.length;
// console.log("Avg: " + avg);

const longestEmail = users.reduce((accumulation, user) => {
    return accumulation.length < user.email.length ? user.email : accumulation;
}, '');
// console.log(longestEmail);

const instructors = users.reduce((accumulation, instructor, index) => {
    let comma = (users.length - 1 === index) ? "" : ", ";
    return accumulation += instructor.name + comma;
}, 'Your instructors are: ');
console.log(instructors);

const uniqueLang = users.reduce((accumulation, user) => {
    accumulation.push(...user.languages.filter(lang => !accumulation.includes(lang)))
    return accumulation;
}, [])

console.log(uniqueLang)