function　BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function() {
    return "No, I must disagree"
  }
  this.approve = function() {
    return "You can do that!"
  }
  this.doCharity = function() {
    return "I like to help people."
  }
}

approve — returns You can do that!

doCharity — returns I like to help people.

releasePressStatement — returns You will see great things from Scuber.

sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.