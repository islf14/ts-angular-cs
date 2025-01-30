import { Course } from "../../models/course-to";

export const courses: Course[] = [
  {
    subject: 'JavaScript',
    difficulty: 9,
    require: 'HTML and CSS'
  },
  {
    subject: 'TypeScript',
    difficulty: 7,
    require: 'JavaScript'
  },
  {
    subject: 'Angular',
    difficulty: 9,
    require: 'HTML, CSS, JS and TS'
  },
  {
    subject: 'React',
    difficulty: 7,
    require: 'HTML, CSS and JS'
  }  
]