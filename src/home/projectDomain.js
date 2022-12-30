const ProjectDomain = ({extendedClass, image, name}) => {
  return (
    <div className={`projectDomain ${extendedClass ? extendedClass : ""}`}>
        <img src={image} alt={name} />
        <p>{name}</p>
    </div>
  );
}

export default ProjectDomain;
