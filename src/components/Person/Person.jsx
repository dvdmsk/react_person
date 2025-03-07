import './Person.scss';

export const Person = ({ person }) => {
  const ageElement = person.age ? (
    <p className="Person__age">I am {person.age}</p>
  ) : null;

  let parthner = 'I am not married';

  if (person.isMarried) {
    const text = `${person.partnerName} is my `;

    parthner = text;

    parthner += person.sex === 'm' ? 'wife' : 'husband';
  }

  const parthnerElement = <p className="Person__partner">{parthner}</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageElement}
      {parthnerElement}
    </section>
  );
};
