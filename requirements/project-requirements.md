# Fullstack Team Project

## Learning Objectives

- Use agile ceremonies including stand-ups, retrospectives, sprint planning and stakeholder demos to develop software as a team
- Design and build a full-stack architecture that has a frontend application consuming data from a backend API
- Use a source code management tool to integrate work in one codebase with multiple contributors

## Project Requirements

- Must contain a well thought out entity relationship diagram and application design built via user stories
- Must be a full-stack application with a [ReactJS](https://reactjs.org/) frontend consuming data from an [ElephantSQL](https://www.elephantsql.com/) database that is exposed to the client via an API built using [Express](https://expressjs.com/) and [Prisma](https://www.prisma.io/)
- Must not expose sensitive information
- Must not contain hard coded URL’s (routes are fine, `http://localhost` is not)
- Commit messages must be consistent and meaningful
    - Keep them in present tense (✅ `add, remove, update` ❌ `added, removed, updated`)
    - Keep them short and descriptive ( `change hashing library`, `add password to user model` )
    - [Here are some good guidelines](https://reflectoring.io/meaningful-commit-messages/) but don’t go overboard, the above two bullet points are enough

## Assessment

- Students will work on feature branches and create pull requests to merge in to the `main` branch upon teacher approval. The team must discuss and provide feedback on the implementation in the PR before a teacher provides their feedback and final approval. [See pull-requests.md for the process.](./pull-requests.md)
- Stakeholder demo’s at the end of each sprint (3 days)
    - Did you plan effectively for the current sprint?
    - Did you perform daily standups?
    - Can you accurately explain the work you’ve completed?
    - Did you complete all of the tasks in the sprint?
- End of project retrospectives

## Getting started

1. Choose which application you want to build as a team: [Option 1](./option-1.md) or [Option 2](./option-2.md)
2. Choose the level of scaffolding you want to start with by selecting the appropriate branch
    - `empty` - this branch contains no scaffolding. Not even a package.json file.
    - `scaffolded` - this branch has ReactJS and Express set up.
    - `scaffolded-with-auth` - the same as scaffolded but with authentication ready for you out of the box.
3. Complete your sprint planning stage
4. Read the setup instructions inside the `instructions.md` file on the branch you've chosen