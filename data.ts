const names = ["Олег", "Денис", "Павел", "Роман", "Мария", "Екатерина", "Евгений", "Анастасия", "Ольга"]

export const data = [
  {
    id: Math.random().toString(36).slice(-10),
    personal_id: Math.random().toString(36).slice(-10),
    name: names[Math.floor(Math.random() * (names.length-1))],
    answers: [
      {
        id: Math.random().toString(36).slice(-10),
        name: Math.random().toString(36).slice(-10),
        type: Math.floor(Math.random() * 1),
        low: (Math.random() * 10).toFixed(1),
        high: (Math.random() * 10).toFixed(1),
        median: (Math.random() * 10).toFixed(1),
      },
      {
        id: Math.random().toString(36).slice(-10),
        name: Math.random().toString(36).slice(-10),
        type: Math.floor(Math.random() * 1),
        low: (Math.random() * 10).toFixed(1),
        high: (Math.random() * 10).toFixed(1),
        median: (Math.random() * 10).toFixed(1),
      },
      {
        id: Math.random().toString(36).slice(-10),
        name: Math.random().toString(36).slice(-10),
        type: Math.floor(Math.random() * 1),
        low: (Math.random() * 10).toFixed(1),
        high: (Math.random() * 10).toFixed(1),
        median: (Math.random() * 10).toFixed(1),
      },
      {
        id: Math.random().toString(36).slice(-10),
        name: Math.random().toString(36).slice(-10),
        type: Math.floor(Math.random() * 1),
        low: (Math.random() * 10).toFixed(1),
        high: (Math.random() * 10).toFixed(1),
        median: (Math.random() * 10).toFixed(1),
      },
      {
        id: Math.random().toString(36).slice(-10),
        name: Math.random().toString(36).slice(-10),
        type: Math.floor(Math.random() * 1),
        low: (Math.random() * 10).toFixed(1),
        high: (Math.random() * 10).toFixed(1),
        median: (Math.random() * 10).toFixed(1),
      },
    ],
  },
];