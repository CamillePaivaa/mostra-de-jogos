import { Linha } from "./Linha";

function CustomNav({ titulo, onClick, isActive }) {
  return (
    <div onClick={onClick} style={{ flexDirection: "column" }}>
      <p
        style={{
          color: isActive ? "#ff0080" : "white",
          fontWeight: isActive ? "bolder" : "normal",
        }}
      >
        {titulo}
      </p>

      {isActive && <Linha />}
    </div>
  );
}

export { CustomNav };
