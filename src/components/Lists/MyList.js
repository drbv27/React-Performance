import { isEqual } from "lodash";
import { memo } from "react";

/* const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`);
  return <li>{fullname}</li>;
}); */

const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`);
  return <li>{children}</li>;
}, isEqual);

/* const MLi = memo(Li); */ //una forma es aplicando memo al componente
/* const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
      ))}
    </ul>
  );
}; */
const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      ))}
    </ul>
  );
};

export default memo(MyList);
