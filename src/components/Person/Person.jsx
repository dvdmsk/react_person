import './Person.scss';

export const Person = ({ person }) => {
  const ageElement = person.age ? (
    <p className="Person__age">I am {person.age}</p>
  ) : null;

  let partner = 'I am not married';

  if (person.isMarried) {
    const text = `${person.partnerName} is my `;

    partner = text;

    partner += person.sex === 'm' ? 'wife' : 'husband';
  }

  const partnerElement = <p className="Person__partner">{partner}</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageElement}
      {partnerElement}
    </section>
  );
};
