class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer()
        interviewer.askQuestions()
    }
}

module.exports = HiringManager;
