# Scripture Shuffle

<p align="center">
  <strong>A Random Bible Verse Quiz Challenge</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#usage">Usage</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#license">License</a>
</p>

---

## Overview

Scripture Shuffle is a fully functional Django application that empowers users to embark on a multiple-choice quiz featuring personally curated Bible verses sourced from the King James Version (KJV). With every quiz, participants encounter a fresh array of randomly selected verses, ensuring each Bible challenge remains uniquely engaging and enriching.

## Screenshots
<p align="center">
  <img width="300" src="https://www.freesmartphoneapps.com/static/quiz/images/screenshots/quiz.jpg" alt="Quiz page dark mode">&nbsp;&nbsp;<img width="300" src="https://www.freesmartphoneapps.com/static/quiz/images/screenshots/results.jpg" alt="Results page light mode">
</p>

Perfect for:
- Bible study groups
- Personal Scripture memorization practice

## Features

- **Randomized Quizzes** - Each quiz presents a unique selection of verses from your database
- **Multiple Choice Format** - Four answer options per question for engaging gameplay
- **Built-in Timer** - Track how long it takes to complete each quiz
- **Score Tracking** - See your correct/incorrect answers with detailed results
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Admin Interface** - Easy verse management through Django's admin panel
- **Accessible** - Built with ARIA labels and screen reader support

## Demo

**Live Demo:** [https://www.freesmartphoneapps.com/scriptureshuffle/](https://www.freesmartphoneapps.com/scriptureshuffle/)

## Requirements

- Python 3.8+
- Django 4.0+
- pythonbible

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/alfloyd71/ScriptureShuffle.git
cd ScriptureShuffle
```

### 2. Create a Virtual Environment (Recommended)

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install django
pip install pythonbible
```

### 4. Apply Database Migrations

```bash
python manage.py migrate
```

### 5. Create a Superuser

```bash
python manage.py createsuperuser
```

### 6. Run the Development Server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000` to see the app, and `http://127.0.0.1:8000/admin` to add verses.

## Configuration

### Setting the Number of Quiz Questions

Customize the number of verses displayed per quiz by editing the `verses_limit_range` variable in `views.py`:

```python
# Customize to the number of random verses for each quiz
verses_limit_range = 5  # Default: 5 questions per quiz
```

> **Note:** Ensure your database contains at least as many verses as specified in `verses_limit_range`, otherwise the quiz will not display.

### Adding Bible Verses

1. Navigate to the Django Admin panel (`/admin`)
2. Log in with your superuser credentials
3. Click on **Ques models** to add new verses

<p align="center">
  <img src="https://www.freesmartphoneapps.com/static/quiz/images/AdminQuesmodelScreenshot.png" alt="Adding verses in Admin" width="600">
</p>

Each verse entry requires:
- **Question** - The Bible verse text (up to 600 characters)
- **Option 1-4** - Four possible book/chapter/verse references
- **Answer** - The correct reference

<p align="center">
  <img src="https://www.freesmartphoneapps.com/static/quiz/images/AdminQuesmodelScreenshot2.png" alt="Admin QuesModel listing" width="600">
</p>

---

## Usage

### Taking a Quiz

1. **Start the Quiz** - Visit the homepage at `http://127.0.0.1:8000` to begin a new quiz
2. **Answer Questions** - For each verse displayed, select the correct book, chapter, and verse reference from the four multiple-choice options
3. **Track Your Time** - A timer runs throughout the quiz to track your completion speed
4. **Submit Answers** - Once you've answered all questions, click the submit button to see your results
5. **Review Results** - View your score, time taken, and a breakdown of correct and incorrect answers

### Managing Verses

1. **Access Admin Panel** - Navigate to `http://127.0.0.1:8000/admin` and log in with your superuser credentials
2. **Add New Verses** - Click on "Ques models" → "Add" to create new quiz questions
3. **Edit Existing Verses** - Click on any verse in the list to modify its content
4. **Delete Verses** - Select verses and use the delete action to remove them

### Example Verse Entry

When adding a verse through the admin panel:

| Field | Example Value |
|-------|---------------|
| Question | "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." |
| Option 1 | John 3:16 |
| Option 2 | Romans 8:28 |
| Option 3 | Psalm 23:1 |
| Option 4 | Proverbs 3:5 |
| Answer | John 3:16 |

> **Tip:** Ensure the answer field exactly matches one of the four options.

## Project Structure

```
ScriptureShuffle/
├── migrations/           # Database migrations
├── static/quiz/
│   ├── css/             # Stylesheets
│   ├── fonts/           # Bootstrap glyphicons
│   ├── images/          # App icons and images
│   └── js/              # JavaScript files
├── templates/quiz/
│   ├── dependencies.html # Base template with CSS/JS includes
│   ├── home.html        # Main quiz page
│   ├── navbar.html      # Navigation component
│   └── results.html     # Quiz results page
├── admin.py             # Admin configuration
├── apps.py              # App configuration
├── forms.py             # Django forms
├── models.py            # Database models
├── urls.py              # URL routing
└── views.py             # View logic
```

## Data Model

The `QuesModel` stores quiz questions with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `question` | CharField(600) | The Bible verse text |
| `op1` | CharField(200) | First answer option |
| `op2` | CharField(200) | Second answer option |
| `op3` | CharField(200) | Third answer option |
| `op4` | CharField(200) | Fourth answer option |
| `ans` | CharField(200) | The correct answer |
| `update_date` | DateTimeField | Last modification timestamp |

## Screenshots
<p align="center">
  <img src="https://www.freesmartphoneapps.com/static/quiz/images/screenshots/progress-bar.jpg" alt="Edit Verses" width="300">&nbsp;&nbsp;<img src="https://www.freesmartphoneapps.com/static/quiz/images/screenshots/quiz-questions.jpg" alt="Study Boxes" width="300">
</p>

### Quiz Interface
The main quiz presents randomized verses with multiple-choice answers and a running timer.

### Results Page
After submission, view your score, time taken, and review correct/incorrect answers.
![Results](https://www.freesmartphoneapps.com/static/quiz/images/Results.png)

## License

This project is open source and available under the [MIT License](https://github.com/alfloyd71/ScriptureShuffle?tab=MIT-1-ov-file#readme).

## Acknowledgments

- Bible verses sourced from the King James Version (KJV)
- Built with [Django](https://www.djangoproject.com/)
- Uses [pythonbible](https://github.com/avendesora/pythonbible) for Bible reference parsing

---

<p align="center">
  Made with faith and code
</p>
