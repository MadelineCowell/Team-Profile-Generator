# Template Engine - Team Profile Generator

This template allows the manager to build individual profiles for their team. Once the user has entered in all the necessary information about their employees, an HTML webpage will generate. This final webpage displays summaries for each team member.


## USAGE

The manager will run node app.js and follow the prompts. 

The first set of prompts will ask for their information: name, employee ID, email and their office number. The manager will then be prompted to add more employee profiles. The engineer profile includes the following: name, employee ID, email and for their GitHub username. The intern profile includes: name, employee ID, email and their school information.

Once all profiles are added, a team.html will be generated with the information received from the terminal. 

### TECHNICAL INFORMATION

This project includes these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory and all tests pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` also includes:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` also includes:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` also includes:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of one manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)


## CREDITS
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
