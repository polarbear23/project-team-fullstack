# Student Process

Pull Requests will be submitted upon completion of a feature.

All work must be done on feature branches which are pushed to GitHub. A new pull request to merge it into the `main` branch can then be created.

1. Once a PR is created, the creator must ask all team members to provide feedback directly on the PR. This is usually known as a peer-review:
    - Discuss general code quality (reusability, naming conventions, formatting, readability etc.)
    - Provide suggestions for improvements, link relevant documentation or examples if it might be useful.
    - Ask questions about the code - “Why did you decide on using x here?”, “Could this be turned into a function to be reused?”, “How did you figure this out?”, etc.
    - No teacher review will be given until this peer-review has taken place.
2. Once team discussion has finished, ask a teacher for a review by posting a link to the PR in the `#code-review` channel on Discord and tag one or more relevant teachers.
3. If the teacher approves the PR, the creator will merge it into `main` through the GitHub UI and notify their team members. Everyone will pull the changes into their local repo, and the creator will create a new branch for their next feature.
4. If the teacher requests changes, the creator will implement the suggestions and notify the teacher when the PR has been updated. Repeat until approval.


# Teacher Process

1. Check that team feedback has been given directly on the PR. If not, pass it back to the team and have them notify you when they have completed this step.
2. Check the commit history for meaningful and consistently formatted commit messages, taking note of the quantity (there should be a good balance between quantity and content)
    - Are they present tense?
    - Are there any vague messages? (e.g. `fix bug`, `fix again`, `try again`)
    - Are there single commits with irrelevant / huge changes?
3. Check team discussion and provide validation or further feedback, linking relevant documentation and providing examples when useful.
4. Check for areas of code not discussed by the team which warrant feedback.
5. If there are drastic improvements that should be made, request changes and have the student notify you when updates have been made. Repeat until approval. This should only happen if absolutely necessary, for example:
    1. Merging would break the app
    2. Code is fundamentally flawed
    3. Project requirements have been broken
6. If satisfied, approve the PR.
