import { LineChart as LChart, Line } from 'recharts';
const Linechart = () => {

    const mathMarksData=[
        { "name": "Student 1", "marks": 85 },
        { "name": "Student 2", "marks": 78 },
        { "name": "Student 3", "marks": 92 },
        { "name": "Student 4", "marks": 67 },
        { "name": "Student 5", "marks": 88 },
        { "name": "Student 6", "marks": 75 },
        { "name": "Student 7", "marks": 90 },
        { "name": "Student 8", "marks": 82 },
        { "name": "Student 9", "marks": 95 },
        { "name": "Student 10", "marks": 73 }
    ]
    
    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
            <Line type="monotone" dataKey="marks" stroke="#8884d8" />
            </LChart>
        </div>
    );
};

export default Linechart;