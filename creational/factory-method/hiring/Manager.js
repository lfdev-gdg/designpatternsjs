const Interviewer   = require('./Interviewer');
const HiringManager = require('./HiringManager');

class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Interviewer.Developer()
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new Interviewer.CommunityExecutive()
    }
}

module.exports = {
    DevelopmentManager,
    MarketingManager
}
