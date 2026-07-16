### Football Simulator

### JS Implementation
### Step to Run
- git clone
- cd JsImplementation
- node main.js

### TS Implementation
The app config has three parameter 
- saving_chances
- goals_chances
- bais
This are the coefficient of probability

- Attacking power selection = 
  TeamA Attacking Power /
  (Attacking power of TeamA + TeamB)

- Saving goal selection 
  Save Probability = 
  Saving Power * saving_chances / (Saving Power * saving_chances) + (Attacking Power * goal_chances)

- bais
==> it is the factor used based as the multipier of the player selection to increaese the selection of the striker more 

### Step to Run
- git clone
- cd TsImplementation
- mkdir dist
- npm i
- npx tsc
- node dist/main.js