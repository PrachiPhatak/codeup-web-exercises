/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Prachi Phatak';
const email = 'prachi@phatak.com';
const languages = ['HTML', 'JS', 'CSS'];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});
//console.log(users[5].name);

// TODO: replace `var` with `let` in the following variable declarations
emails = ['casey@codeup.com', 'laura@codeup.com', 'dorian@codeup.com', 'tristan@codeup.cpm'];
names = ['Casey', 'Laura', 'Dorian', 'Tristan'];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
    return emails.push(user.email);
});
users.forEach(function(user) {
    return names.push(user.name);
});
//console.log(users)
// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach( user => {

    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    // TODO: rewrite the assignment below to use template strings
    developers.push(`${user.name}'s email is ${user.email}. ${user.name} knows ${user.languages.join(', ')}.`);
});
//console.log(developers)
// TODO: Use `let` for the following variable
let list = '<ul>';

// // TODO: rewrite the following loop to use a for..of loop
for (const developer of developers) {
    list += `<li>${developer}</li>`;
}
list += '</ul>';

console.log(list);