const names = ["Олег", "Денис", "Павел", "Роман", "Мария", "Екатерина", "Евгений", "Анастасия", "Ольга", "Лариса", "Василиса", "Глеб", "Семён"]

const randomIntRange = (min:number, max:number, fixed = 0) => {
  return Number((min + Math.random() * (max - min)).toFixed(fixed));
};

const peopleAnswers = Array.from({ length: randomIntRange(2, 5) }, () => ({
  id: Math.random().toString(36).slice(-10),
  personal_id: Math.random().toString(36).slice(-10),
  name: names[Math.floor(Math.random() * (names.length - 1))],
  answers: Array.from({ length: randomIntRange(5, 20) }, () => ({
    id: Math.random().toString(36).slice(-10),
    name: Math.random().toString(36).slice(-10),
    type: randomIntRange(0, 1),
    low: randomIntRange(0, 10, 1),
    high: randomIntRange(0, 10, 1),
    median: randomIntRange(0, 10, 1),
  })),
}));
export const data = [...peopleAnswers]