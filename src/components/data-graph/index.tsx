import React, { useContext, useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container } from "./styles";
import { jwtDecode } from "jwt-decode";
import { userContext } from "../../contexts/userContexts";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface MyData {
    weight: number;
    fat: number;
    muscle: number;
    vis_fat: number;
    body_age: number;
    date: string;
}

interface MyJwtPayload {
    id: string;
    email: string;
}

function DataGraph() {

    const [data, setData] = useState<MyData[]>([]);

    const { handleGetAllData } = useContext(userContext);

    const token = localStorage.getItem('token');


    useEffect(() => {
        if (token) {
            const decoded = jwtDecode<MyJwtPayload>(token);
            handleGetAllData(decoded.id, token).then((fetchedData: MyData[]) => {
                setData(fetchedData);
            }).catch((error: any) => {
                console.error("Error fetching data:", error);
            })
        }
    }, [token, handleGetAllData]);

    const WeightChart = {
        labels: data.map(entry => new Date(entry.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Peso (kg)',
                data: data.map(entry => entry.weight),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            }
        ],
    };

    const FatChart = {
        labels: data.map(entry => new Date(entry.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Gordura (%)',
                data: data.map(entry => entry.fat),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
            }
        ],
    };

    const MuscleChart = {
        labels: data.map(entry => new Date(entry.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Musculo (%)',
                data: data.map(entry => entry.muscle),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false,
            }
        ],
    };


    const VisFatChart = {
        labels: data.map(entry => new Date(entry.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Gorura Visceral',
                data: data.map(entry => entry.vis_fat),
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: false,
            }
        ],
    };


    const BodyAgeChart = {
        labels: data.map(entry => new Date(entry.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Idade Corporal',
                data: data.map(entry => entry.body_age),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
            }
        ],
    };


    return(
        <Container>
            <Line data={WeightChart} />
            <Line data={FatChart} />
            <Line data={MuscleChart} />
            <Line data={VisFatChart} />
            <Line data={BodyAgeChart} />
        </Container>
    );
}

export default DataGraph; 