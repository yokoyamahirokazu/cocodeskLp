import { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { Banner, BreadCrumb, Categories, Meta, PopularArticle } from '@components';
import { useSearchByQuery } from '@hooks';
import { IBanner, IBlog, ICategory, IPopularArticles, MicroCmsResponse } from '@/types';
import styles from '@styles/SearchPage.module.scss';
import { getCategories } from '@blog';
import { getBlogsByQuery } from '@framework';

type IndexProps = {
  blogs: MicroCmsResponse<IBlog>;
  categories: MicroCmsResponse<ICategory>;
  popularArticles: IPopularArticles;
  banner: IBanner;
  query: string;
};

const Index: NextPage<IndexProps> = (props) => {
  const { searchValue, setSearchValue, onEnterKeyEvent, data } = useSearchByQuery(
    props.query,
    props.blogs,
  );

  return (
    <div className="divider">
      <div className="container">
        <input
          value={searchValue}
          className={styles.search}
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => onEnterKeyEvent(e)}
        />
        <BreadCrumb />
        {data.contents.length === 0 && <>記事がありません</>}
        <ul>
          {data.contents.map((blog) => {
            return (
              <li key={blog.id} className="list">
                <Link href="/[blogId]" as={`/${blog.id}`}>
                  <a className="link">
                    <>
                      {blog.ogimage && (
                        <picture>
                          <img src={`${blog.ogimage.url}?w=670`} className="ogimage lazyload" />
                        </picture>
                      )}
                      <dl className="content">
                        <dt className="title">{blog.title}</dt>
                        <dd>
                          <Meta
                            createdAt={blog.createdAt}
                            category={blog.category}
                            tags={blog.tag}
                          />
                        </dd>
                      </dl>
                    </>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <aside className="aside">
        <Banner banner={props.banner} />
        <Categories categories={props.categories.contents} />
        <PopularArticle blogs={props.popularArticles.articles} />
      </aside>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query.q;
  const blogs = await getBlogsByQuery(query as string);
  const categories = await getCategories();

  return {
    props: {
      blogs: blogs,
      categories: categories,
      query: query,
    },
  };
}

export default Index;
