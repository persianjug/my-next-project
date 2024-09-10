import styles from "./index.module.css";
import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Category from "../Category";
import Date from "../Date";

// type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   }
//   publishedAt: string;
//   createAt: string;
// }

type Props = {
  news: News[];
}

export default function NewsList({ news }: Props) {
  if (news.length === 0) return <p>記事がありません。</p>;

  return (
    <ul>
      {news.map(article => (
        <li key={article.id} className={styles.list}>
          <div className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.tilte}>
                {article.title}
              </dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createAt} />
                {/* <span className={styles.tag}>
                  {article.category.name}
                </span>
                <span className={styles.date}>
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    priority
                  />
                  {article.publishedAt}
                </span> */}
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}