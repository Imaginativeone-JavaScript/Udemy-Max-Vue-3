# Vue Study: Standard Operating Procedure

## Paper
- [ ] Have paper checklist on hand

## Visual Studio Code
- [ ] Launch the App
- [ ] Tend to the Extension Host if necessary
- [ ] Locate Progress on Vue-3-Notes.md

### Git
- [ ] Verify VSC Terminal Location
  ```git
  git status
  ```
  - [ ] I expect to be on a "Video Branch, navigate to the correct one"
  ```git
  git branch
  ```
    - [ ] I expect to see a "Section Branch" and the "main" branch in the list of branches
    
  ## Workflow
  
  ### Create a New Section Branch
  - git checkout -b <Section Branch>
  
  ### Create a New Video Branch
  - Identify Section Branch
  - Use this command (with the format) to create the branch
  ```git
  git checkout -b VNNN-[This video number][Total videos in this section]-Topic-Name-tMMSS
  ```
  ```git
  git push
  ```
  - To set the upstream, copy and paste resulting command. For example: 
  ```git
  git push --set-upstream origin V013-0202-Creating-and-Connecting-Vue-App-Instances-t0840
  ```
  
  ### Update Section Branch
  - Verify that Video Branch has been fully saved, added, committed, and pushed
  - Copy the Section Branch name to the clipboard if necessary
  - git checkout <Section Branch>
  - git merge newly completed Video Branch
  
  ### Acquire and Set Up a Demo App
  - Udemy.com
  - Download "Resources" \*.zip file into **Max-Vue-3** folder
  - Expand contents
  - Command + Option + 2 to reorganize files
  - Move folder to Udemy-Max-Vue-3
    - The demo folder will stack up in here, but I can access each demo app separately
  - Commit the new Demo App Folder
  
  ### Watch Videos, Take Notes, and Account for Progress
  - [ ] Verify video branch
  - [ ] Watch current salient video, making sure to understand every concept
  - [ ] git add any new files/folders
  - [ ] Commit most-recent notes
  - [ ] Push to Video branch
  - [ ] Mark off video on the checklist
