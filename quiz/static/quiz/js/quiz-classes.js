/**
 * Scripture Shuffle - Quiz Instance Class
 * Manages quiz state, timer, and form elements
 */

class QuizInstance {
  constructor() {
    // Quiz elements
    this.questions = document.querySelectorAll('.questions-test');
    this.answers = document.querySelectorAll('.form-answers');
    this.selections = document.querySelectorAll('.form-check-input');
    this.formCheck = document.querySelectorAll('.form-check');
    this.multipleChoiceQuiz = document.querySelector('#form-multiple-choice-quiz');
    
    // Timer elements
    this.timer = document.querySelector('#display-timer');
    this.inputTimer = document.querySelector('#timer');
    
    // Timer state
    this.seconds = 0;
    this.timerInterval = null;
    
    // Initialize
    this.init();
  }

  init() {
    this.setupKeyboardNavigation();
    this.setupVisualFeedback();
  }

  /**
   * Setup keyboard navigation for answer options
   * Allows arrow keys to navigate between options
   */
  setupKeyboardNavigation() {
    this.answers.forEach((answerGroup) => {
      const radios = answerGroup.querySelectorAll('.form-check-input');
      
      radios.forEach((radio, index) => {
        radio.addEventListener('keydown', (event) => {
          let targetIndex;

          switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
              event.preventDefault();
              targetIndex = (index + 1) % radios.length;
              radios[targetIndex].focus();
              radios[targetIndex].checked = true;
              break;
            case 'ArrowUp':
            case 'ArrowLeft':
              event.preventDefault();
              targetIndex = (index - 1 + radios.length) % radios.length;
              radios[targetIndex].focus();
              radios[targetIndex].checked = true;
              break;
          }
        });
      });
    });
  }

  /**
   * Setup visual feedback when answers are selected
   */
  setupVisualFeedback() {
    this.selections.forEach((radio) => {
      radio.addEventListener('change', () => {
        // Find parent form-answers and remove selected state from siblings
        const parentAnswers = radio.closest('.form-answers');
        if (parentAnswers) {
          const allChecks = parentAnswers.querySelectorAll('.form-check');
          allChecks.forEach((check) => {
            check.classList.remove('is-selected');
          });
        }
        
        // Add selected state to current option
        const parentCheck = radio.closest('.form-check');
        if (parentCheck) {
          parentCheck.classList.add('is-selected');
        }
      });
    });
  }

  /**
   * Format time display
   * @param {number} seconds - Time in seconds
   * @returns {string} Formatted time string
   */
  formatTime(seconds) {
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''}`;
    }
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    let timeString = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    if (remainingSeconds > 0) {
      timeString += ` ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    }
    
    return timeString;
  }

  /**
   * Get the number of answered questions
   * @returns {number} Count of answered questions
   */
  getAnsweredCount() {
    let count = 0;
    this.answers.forEach((answerGroup) => {
      const hasChecked = answerGroup.querySelector("input[type='radio']:checked");
      if (hasChecked) count++;
    });
    return count;
  }

  /**
   * Get total number of questions
   * @returns {number} Total questions
   */
  getTotalQuestions() {
    return this.answers.length;
  }

  /**
   * Check if all questions are answered
   * @returns {boolean} True if all questions answered
   */
  isComplete() {
    return this.getAnsweredCount() === this.getTotalQuestions();
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuizInstance;
}
