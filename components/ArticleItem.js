import Link from "next/link";
import articleStyle from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a className={articleStyle.card}>
          <h5>{article.title} &rarr;</h5>
          <p>{article.body}</p>
        </a>
      </Link>
    </>
  );
};

export default ArticleItem;
