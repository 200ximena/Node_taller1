import { useState } from "react";

const Employees = () => {

    const [employees, setEmployees] = useState([
        {
        id: 1,
        fullName: "Pepe Peres",
        designation: "Maestro",
        gender: "Male",
        teamName: "TeamA"

        },

        {
        id: 2,
        fullName: "Lina Paez",
        designation: "Secretario",
        gender: "Femenino",
        teamName: "TeamC"
    
        },

        {
        id: 3,
        fullName: "Mariana Lopez",
        designation: "Instructor",
        gender: "Male",
        teamName: "TeamA"
        
        },

        {
        id: 4,
        fullName: "Sara Socas",
        designation: "Esrtilista",
        gender: "Male",
        teamName: "TeamB"
        
        },

        {
        id: 5,
        fullName: "Angie Ramirez",
        designation: "Estudiamte",
        gender: "Femenino",
        teamName: "TeamA"
        
        },

        {
        id: 6,
        fullName: "Ximena Macias",
        designation: "Ingeniera",
        gender: "Femenino",
        teamName: "TeamC"
            
        },

        {
        id: 7,
        fullName: "Mariana Crespo",
        designation: "Maestra",
        gender: "Femenino",
        teamName: "TeamC"
            
        },
         
        {
        id: 8,
        fullName: "Alejandra Maldonado",
        designation: "Maestra",
        gender: "Masculino",
        teamName: "TeamA"
            
        },

        {
        id: 9,
        fullName: "Lina Perez",
        designation: "Electrisista",
        gender: "Male",
        teamName: "TeamC"
            
        },
    
        {
        id: 10,
        fullName: "Cristian Calvo",
        designation: "Maestro",
        gender: "Female",
        teamName: "TeamA"
            
        },

        {
        id: 11,
        fullName: "Catalina Caastro",
        designation: "Maestro",
         gender: "Femenino",
        teamName: "TeamB"
            
        },

        {
        id: 12,
        fullName: "Tefa Rangel",
        designation: "Enfermera",
        gender: "Femenino",
        teamName: "TeamC"
            
        }
    ]);

    return (
        <main>
        {
            employees.map((employee) => (
                <p>{employee.fullName}</p>
            ))
        }
        </main>
    
    )
}
export default Employees;