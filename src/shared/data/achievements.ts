export const detailedAchievements = {
  hackathons: [
    {
      name: 'IT Cup ProTechno',
      result: '2nd place',
      note: 'Received an invitation to work at Apogey 1C.',
    },
    {
      name: '1C ProTechno',
      result: '2nd place',
    },
    {
      name: 'Siberian Industrial Festival "Promka"',
      result: '2nd place',
    },
  ],

  olympiads: [
    {
      category: 'Computer Science',
      names: [
        'Izumrud',
        'Rosatom',
        'Belyonok',
        'Gazprom',
        'A Step into the Future',
        'Higher Standard',
        'Municipal Stage of the All-Russian School Olympiad (VSOSh)',
      ],
    },
    {
      category: 'Mathematics',
      names: [
        'Izumrud',
        'OMMO',
        'Kurchatov Olympiad',
      ],
    },
  ],

  science: [
    {
      name: 'Leonardo All-Russian Scientific Conference',
      result: '2nd place',
      note: 'Travel to the conference was funded by SFU.',
    },
    {
      name: 'Young Scientists Solving Current Problems of Science',
    },
  ],
} as const;