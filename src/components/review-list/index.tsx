import { reviewsTable } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Link from "next/link";
import { FC } from "react";

type Review = InferSelectModel<typeof reviewsTable>;

/* interface Review {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
} */

interface Props {
  reviews: Review[];
}

export const ReviewList: FC<Props> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id} className="max-w-30 border p-2">
          <Link href={`/reviews/${review.id}`}>
            <h3>{review.title}</h3>
            <div>{review.content}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
