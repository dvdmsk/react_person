import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const personAge = age && <p className="Person__age">I am {age}</p>;
  const partner = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  const personPartner = <p className="Person__partner">{partner}</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {personAge}
      {personPartner}
    </section>
  );
};
