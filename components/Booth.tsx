import Image from 'next/image';

interface Article {
  id?: string;
  title?: string;
  access?: string;
  image?: {
    url: string;
  };
}
type BoothProps = {
  articles: Article[];
};

export const Booth: React.FC<BoothProps> = (props) => {
  return (
    <section id="booth">
      {props.articles.map((booth) => {
        return (
          <div key={booth.id}>
            <h3>{booth.title}</h3>
            {booth.access}
            {booth.image && <Image src={booth.image.url} width="100" height="100" />}
          </div>
        );
      })}
    </section>
  );
};

export default Booth;
