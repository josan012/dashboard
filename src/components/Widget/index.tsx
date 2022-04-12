import Style from "./styled";

interface Props {
  title: string;
  description: string;
  date: string;
  user: string;
}

const Widget: React.FC<Props> = ({ title, description, date, user }) => {
  return (
    <Style>
      <div className="widget">
        <h1>{title}</h1>
        <p>{description}</p>
        <span className="date">{date}</span>
        <span className="util">{user}</span>
      </div>
    </Style>
  );
};
export default Widget;
