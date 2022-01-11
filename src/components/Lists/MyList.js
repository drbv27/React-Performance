import { memo } from "react";
const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`);
  return <li>{fullname}</li>;
});

/* const MLi = memo(Li); */ //una forma es aplicando memo al componente
const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
      ))}
    </ul>
  );
};

export default MyList;
