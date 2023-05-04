export const Item = ({ avatar, name }) => {
  
    return (
      <div key={name} style= {{display: "inline-flex"}}>
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      </div>
    );
  }
  