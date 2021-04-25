### Process before editing code
- git pull request from master
- git checkout -b ("new_branch_name_here")
### Process before trying to submit any code:
- npm run lint (on filename with full path from root directory you are editing)
- npm run format
- npm run test (on filename with full path from root directory you are editing)
- npm run test(check to see if nothing else is broken)
- git add .
- git commit -m "your message here with what you added/changed"
- git push origin "branch_name_here"

### Process after pushing branch
- Go into github and look at pull requests tab (you should see your branch having changes)
- Select compare and pull
- Open up Travis to see the build of that branch
- Wait for test cases to pass (all cases should pass on Travis)
- Create pull request
- On right side of page, add reviewers (add one reviewer)
- Assign yourself as the assignee
- Wait for reviewer to comment on code
- If the reviewer approves, resolve conversation, if not make changes
- confirm merge
- After merge is complete, check Travis again to see if code passes tests
- delete checked out branch
