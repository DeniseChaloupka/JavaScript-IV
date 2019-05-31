// CODE here for your Lambda Classes
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
    
    }
    
}

class Instructor extends Person {
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
        
    }
    demo(subject) {
        return `Today we are learning ${subject}.`;
    }

    grade(studentName, subject) {
        return `${studentName} recieves a perfect score on ${subject}`;
    }
   

}

class ProjectManager extends Instructor {
    constructor(projectManager) {
        super(projectManager);
        this.gradClassName = projectManager.gradClassName;
        this.favInstructor = projectManager.favInstructor;
     
    }

    
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(studentName, subject) {
        return `${this.name} debugs ${studentName}'s code on ${subject}.`;
    }

}

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }


    listsSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`;
    }

    

}

const gandalf = new Instructor({
    name: 'Gandalf the Grey',
    location: 'Middle-Earth',
    age: 1500,
    favLanguage: 'Javascript',
    specialty: `Javascript Magic`,
    catchPhrase: `You shall not pass`,

});

const arwen = new Student({
    name: 'Arwen',
    location: 'Lorien',
    age: 1200,
    previousBackground: `Elven Princess`,
    className: `WebPT7`,
    favSubjects: ['Javascript', 'C#', 'Python', 'Ruby']
});

const gimli = new ProjectManager({
    name: 'Gimli',
    location: 'Ered Luin',
    age: 45,
    className: 'WebPT7',
    specialty: 'Teaching',
    catchPhrase: `Nobody tosses a dwarf.`
});



console.log(gandalf);
console.log(arwen);
console.log(gimli);
console.log(gandalf.demo());
console.log(gandalf.grade(arwen.name, 'Javascript'));
console.log(gimli.standUp('webPT_chance'));
console.log(gimli.debugsCode(arwen.name, arwen.subject));
console.log(arwen.PRAssignment());
console.log(arwen.listsSubjects());
console.log(arwen.PRAssignment('Javascript IV'))



