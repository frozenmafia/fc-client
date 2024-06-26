import { OutputData } from "@editorjs/editorjs";
import { Tag } from "react-tag-input";

export interface BlogGetData {
    thumbnail_id: number;
    id?:number;
    title: string;
    content: any;
    author?: string;
    published_at?: string;
    tags: Tag[];
    image?: File; // Image file for the blog post
    views?: number;
    likes?: number;
    dislikes?:number;
    comments?: string[];
  }
  
  