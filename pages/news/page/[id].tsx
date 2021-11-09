import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { BreadCrumb, Categories, Loader, Meta, Pager } from '@components';
import { IBanner, IBlog, ICategory, IPopularArticles, ITag } from '@/types';
import { getBlogsByFilter, getContents } from '@blog';
import { Tags } from '@components/Tags';

type PageProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  banner: IBanner;
  pager: [];
  tags: ITag[];
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="divider">
      <div className="container">
        <BreadCrumb />
        {props.blogs.length === 0 && <>記事がありません</>}
        <ul>
          {props.blogs.map((blog) => {
            return (
              <li key={blog.id} className="list">
                <Link href="/news/[blogId]" as={`/news/${blog.id}`}>
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
        {props.blogs.length > 0 && (
          <ul className="pager">
            <Pager pager={props.pager} currentPage={props.currentPage} />
          </ul>
        )}
      </div>
      <aside className="aside">
        <Categories categories={props.categories} />
        <Tags tags={props.tags} />
      </aside>
    </div>
  );
};

export async function getStaticPaths() {
  const limit: number = 10;
  const { pager } = await getBlogsByFilter(limit, 1);
  const paths = pager.map((page) => {
    return { params: { id: (page + 1).toString() } };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params?.id || '1';
  const { blogs, pager, categories, tags } = await getContents(page);
  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
      tags,
    },
  };
}
export default Page;
