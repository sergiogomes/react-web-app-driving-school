import Head from "next/head";

import Layout from "../../components/layout/layout";
import DateComponent from "../../components/date/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className="max-w-full rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{postData.title}</div>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <article>
            <p
              className="text-gray-700 text-base"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>

        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
