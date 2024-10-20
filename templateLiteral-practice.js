//exercise : write details about yourself using template literal and use variable and objects to show the value

let num1 = 5
let num2 = 7
let DSA = "DSA", DevOps = "DevOps", MernStack =  "MernStack", SpringBoot= "SpringBoot",Oracle="Oracle";

let classes = {
    DSA,
    DevOps,
    MernStack,
    SpringBoot,
    Oracle
    }
let myTemplateLiteral =
    `Hi My name is Ben Ma. I have been doing Java programming for a number of years.
     
     I am currently studying a variety of topics in Java, JavaScript and others in SynergisticIT. 
     Commit myself ${num1} to ${num2} hours each day in classes:
      
      ${classes.DevOps}, ${classes.DSA}, ${classes.MernStack}, ${classes.SpringBoot}, ${classes.Oracle}
      
     and more time spent in reviewing and practicing those topics.
     
     Beside my daily work, I have a lot of fun from other stuff. I love photography, 
     love to listening to all kinds of music and songs. 
     
     I  also have fun with my kids and play together with them in various activities.
`;

console.log(myTemplateLiteral)