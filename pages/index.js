import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [reason, setReason] = useState("");

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div>
      <Head>
        <style>
          {`
            body {
              background-color: #F5F5F5; /* Light gray color */
            }
          `}
        </style>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>Guilherme</h1>
        <p>
          Olá, meu nome é Guilherme, eu tenho 13 anos e sou o criador desta página
          <br />
          da web. Sou um programador iniciante, aprendendo a programar com a ajuda
          do meu primo.
        </p>
        <button
          style={{
            borderRadius: "50px", // Circular edges
            backgroundColor: "#E8E8E8", // Light gray background color
            color: "blue", // Blue text color
            border: "none", // No border
            marginBottom: "50px", // Distance between text and button
          }}
          onClick={handleButtonClick}
        >
          Porque eu decidi virar programador
        </button>
        {showInput && (
          <div>
            <textarea
              placeholder="Eu decidi virar programador pois quero criar minha propria pagina da web que calcule oque compensa das gasolinas"
              value={reason}
              onChange={handleInputChange}
              rows={4}
              cols={50}
              style={{
                width: "500px", // Adjusted width
                height: "200px", // Adjusted height
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
