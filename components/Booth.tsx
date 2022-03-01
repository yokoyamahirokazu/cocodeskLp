import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Button from '@components/Button';

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
    <section id="booth" className={styles.bg_primary_05}>
      <div className={styles.section_inner}>
        <h2>設置場所</h2>
        <ul className={styles.vertical}>
          {props.articles.map((booth) => {
            return (
              <li key={booth.id}>
                <div className={styles.box_white}>
                  <div className={styles.booth_flex}>
                    {booth.image && (
                      <div className={styles.booth_img}>
                        <div className={styles.img_box_D}>
                          <Image
                            src={booth.image.url}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt={booth.title}
                          />
                        </div>
                      </div>
                    )}
                    <div className={styles.booth_txt}>
                      <h3>{booth.title}</h3>
                      <p>{booth.access}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.btn_wrapper}>
          <p>設置場所に関して、詳しくは予約サイトをご覧ください</p>
          <Button color="primary" size="default" linkTo="" as="/contact">
            設置場所について詳しく見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Booth;
