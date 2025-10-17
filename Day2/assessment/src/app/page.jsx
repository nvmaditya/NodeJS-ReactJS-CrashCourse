"use client";

import { useState } from "react";
import { citiesData } from "./data";
import { colorsData } from "./colorsData";

export default function CityPage() {
    const assignColors = (cities) => {
        const result = [];
        for (let i = 0; i < cities.length; i++) {
            result.push({
                ...cities[i],
                cardColor: colorsData[i % colorsData.length],
            });
        }
        return result;
    };

    const [cities, setCities] = useState(assignColors(citiesData));

    const handleToggle = (id) => {
        const newCities = [];
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].id === id) {
                newCities.push({
                    ...cities[i],
                    visited: !cities[i].visited,
                });
            } else {
                newCities.push(cities[i]);
            }
        }
        setCities(newCities);
    };

    const unvisitedCities = cities.filter((city) => !city.visited);
    const visitedCities = cities.filter((city) => city.visited);

    const unvisitedElements = [];
    for (let i = 0; i < unvisitedCities.length; i++) {
        const city = unvisitedCities[i];
        unvisitedElements.push(
            <div
                key={city.id}
                className={`flex items-center p-2 rounded-2xl ${city.cardColor}`}
            >
                <input
                    type="checkbox"
                    onChange={() => handleToggle(city.id)}
                    className="mr-2"
                />
                <span className="text-black">{city.name}</span>
            </div>
        );
    }

    const visitedElements = [];
    for (let i = 0; i < visitedCities.length; i++) {
        const city = visitedCities[i];
        visitedElements.push(
            <div
                key={city.id}
                className={`flex items-center p-2 rounded-2xl ${city.cardColor}`}
            >
                <span className="text-black">{city.name}</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600">
            <div className="p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-2 text-white">
                    Indian Cities to Visit
                </h1>

                <div className="space-y-1 w-full mb-4">
                    {unvisitedElements.length > 0 ? (
                        unvisitedElements
                    ) : (
                        <p className="text-center text-white">
                            All cities visited! 🎉
                        </p>
                    )}
                </div>

                <h2 className="text-lg font-bold1 mb-1 text-white text-center">
                    Visited Cities
                </h2>
                <div className="space-y-1 w-full">
                    {visitedElements.length > 0 ? (
                        visitedElements
                    ) : (
                        <p className="text-center text-white">
                            No cities visited yet!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
