"use client";

import {
  BookOutlined,
  LeftOutlined,
  PlayCircleOutlined,
  SaveFilled,
  StarFilled,
} from "@ant-design/icons";
import { Button, Card, Tag, Typography } from "antd";

import { DynamicEntryData } from "./DynamicEntryData";
import type { Entry } from "./types";

const { Title, Text, Paragraph } = Typography;

interface EntryCardProps {
  entry: Entry;
  favorite: boolean;
  toggleFavorite: () => void;
}

function valueOf(entry: Entry, field: string) {
  return entry.data.find((x) => x.field.name === field)?.value;
}

export default function EntryCard({
  entry,
  favorite,
  toggleFavorite,
}: EntryCardProps) {
  const title = String(valueOf(entry, "عنوان") ?? "بدون عنوان");
  const description = String(valueOf(entry, "توضیحات") ?? "");
  const duration = String(valueOf(entry, "زمان") ?? "");
  const rating = Number(valueOf(entry, "امتیاز") ?? 0);
  const type = String(valueOf(entry, "نوع محتوا") ?? "");

  return (
    <Card
      className="entryCard"
      cover={
        <div className="cardCover">
          <div className="coverPattern">
            {entry.paid ? "محتوای ویژه" : "محتوای رایگان"}
          </div>

          <Button
            shape="circle"
            className="bookmark"
            icon={
              <SaveFilled className={favorite ? "bookmarkActive" : ""} />
            }
            onClick={toggleFavorite}
          />

          <Tag
            color={entry.paid ? "purple" : "green"}
            className="priceTag"
          >
            {entry.paid ? "پرداختی" : "رایگان"}
          </Tag>
        </div>
      }
      actions={[
        <Text
          key="price"
          strong
          className={entry.paid ? "" : "freeText"}
        >
          {entry.paid
            ? `${entry.price?.toLocaleString("fa-IR")} تومان`
            : "رایگان"}
        </Text>,
        <Button key="view" type="primary" size="small">
          مشاهده <LeftOutlined />
        </Button>,
      ]}
    >
      <Text className="instanceText">{entry.instance.name}</Text>

      <Title level={4} ellipsis={{ rows: 2 }}>
        {title}
      </Title>

      <Paragraph ellipsis={{ rows: 2 }} className="description">
        {description}
      </Paragraph>

      <div className="meta">
        {duration && (
          <span>
            <PlayCircleOutlined /> {duration}
          </span>
        )}
        {type && (
          <span>
            <BookOutlined /> {type}
          </span>
        )}
        <span className="rating">
          <StarFilled /> {rating}
        </span>
      </div>

      <DynamicEntryData
        entry={entry}
        exclude={[
          "عنوان",
          "توضیحات",
          "زمان",
          "امتیاز",
          "نوع محتوا",
          "دسته‌بندی",
        ]}
      />
    </Card>
  );
}
