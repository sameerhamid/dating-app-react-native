export interface QuestionsType {
  id: string;
  question: string;
}

export interface promptsType {
  answer: string;
  question: string;
}

export const promptsData = [
  {
    id: '0',
    name: 'About me',
    questions: [
      {
        id: '10',
        question: 'A random fact I love is',
      },
      {
        id: '11',
        question: 'Typical Sunday',
      },
      {
        id: '12',
        question: 'I go crazy for',
      },
      {
        id: '13',
        question: 'Unusual Skills',
      },
      {
        id: '14',
        question: 'My greatest strenght',
      },
      {
        id: '15',
        question: 'My simple pleasures',
      },
      {
        id: '16',
        question: 'A life goal of mine',
      },
    ],
  },
  {
    id: '2',
    name: 'Self Care',
    questions: [
      {
        id: '10',
        question: 'I unwind by',
      },
      {
        id: '11',
        question: 'A boundary of mine is',
      },
      {
        id: '12',
        question: 'I feel most supported when',
      },
      {
        id: '13',
        question: 'I hype myself up by',
      },
      {
        id: '14',
        question: 'To me, relaxation is',
      },
      {
        id: '15',
        question: 'I beat my blues by',
      },
      {
        id: '16',
        question: 'My skin care routine',
      },
    ],
  },
];
