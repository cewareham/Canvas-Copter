class JSCopter {
  constructor(parentId, options) {
    this.container = document.getElementById(parentId);
    // set the options
    this.options = options || cc.options;
    this.distance = 0;
    this.best = 100;
    console.log(this.options);
    // for (let optionType in options) {
    //   for (let subOption in options[optionType]) {
    //     this.options[optionType][subOption] = options[optionType][subOption];
    //   }
    // }
    this.init();
  }
  
  init = () => {
    //this.initScoring();
    this.updateScore();
  }
  
  updateScore = () => {
    textAlign(LEFT);
    let msg = "DISTANCE: " + this.distance;
    drawMsg(msg, dFontB, 'black', 15, 10, height-9);
    msg = "BEST: " + this.best;
    textAlign(RIGHT);
    drawMsg(msg, dFontB, 'black', 15, width-10, height-9);
  }
  
  initScoring = () => {
    let topScore;
    // create score html elements and add them to the page
    cc.scores.elements.current = this.createScore('current');
    cc.scores.elements.top = this.createScore('top');

    // retrieve the current top score from cookie, if cookie script is present
    //if (!!cookie && !!cookie.get) {
    //    topScore = cookie.get('topScore');
    //} else topScore = 100;
    topScore = 100;

    // condition : if a current top score exists, set it
    if (topScore) {
        cc.scores.top = cc.scores.elements.top.innerHTML = topScore;
    }
  }
  
  /**
   * create score html elements
   */
  createScore = (scoreType) => {
    
    // create score element
    let scoreContainer = document.createElement("p");
    scoreContainer.id = scoreType+"scorecontainer";
    let scoreContainerText = document.createTextNode(this.ucFirst(scoreType) /*+ " Score: "*/);
    scoreContainer.appendChild(scoreContainerText);

    // create score container, ready to return
    let score = document.createElement("strong");
    score.id = scoreType+"score";

    // set the current score to 0
    let scoreText = document.createTextNode("0");
    score.appendChild(scoreText);
    scoreContainer.appendChild(score);

    // add the scores to the page
    this.container.appendChild(scoreContainer);

    return score;
  }
  
    /**
     * function to Capitalise the First text Character of A string
     * @param {string} title the url of the new link
     * @returns {string} the new Text String
     */
    ucFirst = (textString) => {
      if (textString == "current") return "DISTANCE: ";
      else return "BEST: ";
      //return textString.substr(0,1).toUpperCase() + textString.substr(1,textString.length);
      //return textString;
    }
}