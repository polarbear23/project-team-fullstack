## Setting up

- One team member must fork the repository and ensure each team member has access to contribute to the fork.
- Other team members will *clone* that fork. All work will be pushed to the single forked repository. At the end of the project, you can fork the fork so everybody has the finished project in their personal github accounts.
- One team member must create a pull request to merge this `empty` branch into the `main` branch.

## Starting advice

- You need to have both a backend *and* a frontend in this same repository. For ideas about how to accomplish this, you may want to at least look into how the `scaffolded` branch is set up.
- Running two sides of an application will require either having two terminals open, one running each, or using the `concurrently` npm package (like the scaffolded branch does).
- Using `create-react-app` and then moving files around is a completely acceptable way to initiate a project. In fact, that's how the `scaffolded` branch was set up.