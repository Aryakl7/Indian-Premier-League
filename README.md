# 🏏 IPL Management System 🏆

A comprehensive, full-stack application designed to manage and analyze the multifaceted data of the Indian Premier League (IPL). This system provides a robust solution for tracking everything from player auctions and team compositions to match statistics and historical records.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#️-system-architecture)
- [Database Schema](#-database-schema)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#️-installation)
- [Usage](#️-usage)
- [Contributors](#-contributors)
- [License](#-license)

---

## 📝 Overview

The IPL Management System is a powerful tool for anyone involved with or following the Indian Premier League. It models the entire IPL ecosystem, from pre-season auctions and player retentions to live match updates and historical data analysis. The core of the system is a sophisticated relational database built with PostgreSQL, designed to ensure data integrity and provide a rich repository for analytical insights. The backend is powered by Node.js, and the user interface is built with React.

---

## ✨ Features

-   ✅ **Comprehensive Data Management**: Meticulously captures, manages, and analyzes a wide array of data, including player profiles, team details, auction outcomes, match schedules, and performance statistics.
-   🛒 **Auction and Player Tracking**: Manages the auction process by tracking base prices, sold prices, and player statuses (sold, unsold, retained).
-   📊 **Real-Time Updates**: Dynamically updates the points table, player stats, and team standings as matches progress.
-   📜 **Historical Data Analysis**: Stores and provides access to a rich tapestry of historical records, including all-time leading run-scorers, wicket-takers, and championship wins.
-   🔒 **Secure and Role-Based Access**: An `Admins` table allows for secure, differentiated access to the system, ensuring that data entry and management are performed by authorized personnel.
-   🔎 **Advanced Querying**: The system is designed to handle complex queries, such as head-to-head team comparisons and identifying the most expensive players.
-   🔗 **Data Integrity**: Utilizes foreign key constraints, triggers, and PL/SQL procedures to ensure data accuracy and consistency.

---

## 🚀 Technology Stack

-   ⚛️ **Frontend**: React
-   🟢 **Backend**: Node.js
-   🐘 **Database**: PostgreSQL
-   ✍️ **Database Logic**: SQL, PL/SQL (for triggers, functions, and procedures)

---

## 🏗️ System Architecture

The application is structured with a clear separation of concerns:

-   **Frontend (React)**: A modern, responsive user interface that consumes data from the backend API to provide an intuitive and interactive experience for users.
-   **Backend (Node.js)**: A RESTful API server that handles all business logic and acts as the intermediary between the frontend and the database.
-   **Database (PostgreSQL)**: The single source of truth for all data. Advanced logic, such as triggers for data synchronization and complex analytical queries, is handled at the database level using SQL and PL/SQL for maximum performance and integrity.

---

## 🗄️ Database Schema

The database is designed with a normalized structure to reduce redundancy and improve data integrity. Key entities include:

-   **Players**: Stores detailed player information.
-   **Teams**: Contains specifics about each franchise.
-   **Seasons**: Manages data for each IPL season.
-   **Matches**: Tracks match fixtures, results, and other details.
-   **PlayerContracts**: Links players to teams for a specific season with salary and status.
-   **AuctionLog**: Records the details of the player auction for each season.
-   **PlayerMatchStats**: Captures individual player performance in each match.
-   **PointsTable**: Dynamically updated table reflecting team standings.
-   **TeamHistoricalStats**: Aggregated historical performance data for each team.
-   **LeagueHistoricalRecords**: All-time league-wide records and leaders.

For a more detailed view, you can refer to the **ER Diagram** in the project documentation.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### 📋 Prerequisites

Make sure you have the following installed on your system:

-   Node.js (LTS version recommended)
-   npm (or yarn)
-   PostgreSQL

### ⚙️ Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  **Install Backend Dependencies**
    ```sh
    cd backend
    npm install
    ```
3.  **Install Frontend Dependencies**
    ```sh
    cd ../frontend
    npm install
    ```
4.  **Set up the Database**
    -   Create a PostgreSQL database.
    -   Update the database connection settings in the backend's configuration file (e.g., `.env`).
    -   Run the SQL scripts provided in the `/database` folder to create the tables and insert initial data.

---

## ▶️ Usage

1.  **Start the Backend Server**
    ```sh
    cd backend
    npm start
    ```
2.  **Start the Frontend Application** (in a new terminal)
    ```sh
    cd frontend
    npm start
    ```
    Open your browser and navigate to `http://localhost:3000` to see the application in action!

---

## 👥 Contributors

-   **Aryak Lalwani**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
