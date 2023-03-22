export interface Todos {
    id: number;
    name: string;
    hour: string;
    description: string
}

export const todos = [
    {
        id: 1,
        name: 'Take a shower',
        hour: '08:00',
        description: ''
    },
    {
        id: 2,
        name: 'Eat breakfast',
        hour: '08:30',
        description: 'eat 3 slices of bread and 4 eggs'
    },
    {
        id: 1,
        name: 'Go to meet',
        hour: '09:00',
        description: 'open this Google Meets room: https://exemplegooglemeets.com'
    },
]